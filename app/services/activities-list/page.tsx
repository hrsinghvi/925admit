'use client'

import { useState } from 'react'
import Link from 'next/link'

const LIST_TYPES = [
  { value: 'common-app', label: 'Common App Activities List', maxActivities: 10, price: 35 },
  { value: 'uc', label: 'UC Activities List', maxActivities: 20, price: 80 },
]

const TURNAROUND_OPTIONS = [
  { value: '1-week', label: '1 week' },
  { value: '5-days', label: '5 days' },
  { value: '3-days', label: '3 days' },
  { value: '1-day', label: '1 day' },
]

const GRADES = ['9th', '10th', '11th', '12th']

interface Activity {
  organization: string
  position: string
  description: string
  hoursPerWeek: string
  weeksPerYear: string
  grades: string[]
}

function emptyActivity(): Activity {
  return { organization: '', position: '', description: '', hoursPerWeek: '', weeksPerYear: '', grades: [] }
}

export default function ActivitiesListPage() {
  const [type, setType] = useState('common-app')
  const [turnaround, setTurnaround] = useState('1-week')
  const [numActivities, setNumActivities] = useState(1)
  const [activities, setActivities] = useState<Activity[]>([emptyActivity()])
  const [comments, setComments] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const listType = LIST_TYPES.find(t => t.value === type)!

  const price = listType.price

  const handleNumChange = (n: number) => {
    setNumActivities(n)
    setActivities(prev => {
      if (n > prev.length) return [...prev, ...Array(n - prev.length).fill(null).map(() => emptyActivity())]
      return prev.slice(0, n)
    })
  }

  const updateActivity = (index: number, field: keyof Activity, value: string | string[]) => {
    setActivities(prev => prev.map((a, i) => i === index ? { ...a, [field]: value } : a))
  }

  const toggleGrade = (index: number, grade: string) => {
    setActivities(prev => prev.map((a, i) => {
      if (i !== index) return a
      const grades = a.grades.includes(grade)
        ? a.grades.filter(g => g !== grade)
        : [...a.grades, grade]
      return { ...a, grades }
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: 'activities-list',
          name,
          email,
          type: listType.label,
          turnaround: TURNAROUND_OPTIONS.find(t => t.value === turnaround)?.label,
          numActivities,
          activities,
          comments,
          price: `$${price}`,
          submittedAt: new Date().toISOString(),
        }),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="shell" style={{ paddingTop: 120, paddingBottom: 120, textAlign: 'center' }}>
        <h1 className="display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 16 }}>
          Got it. We&apos;ll be in touch.
        </h1>
        <p className="lede" style={{ marginBottom: 32 }}>
          We&apos;ve received your activities list and will get back to you within your selected turnaround window.
        </p>
        <Link href="/" style={{ color: 'var(--accent)', fontSize: 16 }}>← Back to home</Link>
      </div>
    )
  }

  return (
    <div className="shell" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <p className="eyebrow" style={{ marginBottom: 24 }}>Submit</p>
      <h1 className="display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 12 }}>
        Activities List <em className="italic" style={{ color: 'var(--accent)' }}>Review</em>
      </h1>
      <p style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 48, maxWidth: '55ch' }}>
        Send us your activities and we&apos;ll craft descriptions that are punchy, specific, and strategically positioned.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {/* Header bar */}
        <div style={{
          background: 'var(--ink)',
          color: 'var(--bg)',
          borderRadius: '16px 16px 0 0',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>Activities List Review</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 24 }}>${price}</span>
        </div>

        {/* Form body */}
        <div style={{
          background: 'var(--paper)',
          border: '1px solid var(--rule)',
          borderTop: 'none',
          borderRadius: '0 0 16px 16px',
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
        }}>
          {/* Name + Email */}
          <div className="grid-2col" style={{ gap: 16 }}>
            <div>
              <label style={labelStyle}>Name</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={inputStyle} />
            </div>
          </div>

          {/* Type */}
          <div>
            <label style={labelStyle}>Type</label>
            <select value={type} onChange={e => { setType(e.target.value); handleNumChange(1) }} style={selectStyle}>
              {LIST_TYPES.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          {/* Turnaround */}
          <div>
            <label style={labelStyle}>Turnaround Time</label>
            <select value={turnaround} onChange={e => setTurnaround(e.target.value)} style={selectStyle}>
              {TURNAROUND_OPTIONS.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          {/* Number of Activities */}
          <div>
            <label style={labelStyle}>Number of Activities</label>
            <select
              value={numActivities}
              onChange={e => handleNumChange(Number(e.target.value))}
              style={selectStyle}
            >
              {Array.from({ length: listType.maxActivities }, (_, i) => i + 1).map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'activity' : 'activities'}</option>
              ))}
            </select>
          </div>

          {/* Activity cards */}
          {activities.map((activity, index) => (
            <div key={index} style={{
              background: 'var(--bg)',
              border: '1px solid var(--rule)',
              borderRadius: 12,
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>
                Activity {index + 1}
              </p>

              <div className="grid-2col" style={{ gap: 12 }}>
                <input
                  type="text"
                  value={activity.organization}
                  onChange={e => updateActivity(index, 'organization', e.target.value)}
                  placeholder="Organization name"
                  style={inputStyle}
                />
                <input
                  type="text"
                  value={activity.position}
                  onChange={e => updateActivity(index, 'position', e.target.value)}
                  placeholder="Position/leadership description"
                  style={inputStyle}
                />
              </div>

              <textarea
                value={activity.description}
                onChange={e => updateActivity(index, 'description', e.target.value)}
                placeholder="Please describe this activity, including what you accomplished and any recognition you received, etc."
                rows={3}
                style={{ ...inputStyle, resize: 'vertical' }}
              />

              <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <input
                  type="text"
                  value={activity.hoursPerWeek}
                  onChange={e => updateActivity(index, 'hoursPerWeek', e.target.value)}
                  placeholder="Hrs/wk"
                  style={{ ...inputStyle, maxWidth: 100 }}
                />
                <input
                  type="text"
                  value={activity.weeksPerYear}
                  onChange={e => updateActivity(index, 'weeksPerYear', e.target.value)}
                  placeholder="Wks/yr"
                  style={{ ...inputStyle, maxWidth: 100 }}
                />
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  {GRADES.map(grade => (
                    <label key={grade} style={{ display: 'flex', gap: 4, alignItems: 'center', cursor: 'pointer', fontSize: 13, color: 'var(--ink-2)' }}>
                      <input
                        type="checkbox"
                        checked={activity.grades.includes(grade)}
                        onChange={() => toggleGrade(index, grade)}
                        style={{ accentColor: 'var(--accent)' }}
                      />
                      {grade}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Comments */}
          <div>
            <label style={labelStyle}>Comments</label>
            <textarea
              value={comments}
              onChange={e => setComments(e.target.value)}
              placeholder="Any additional questions or comments for your consultant?"
              rows={3}
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary"
            style={{ alignSelf: 'flex-start', opacity: submitting ? 0.6 : 1 }}
          >
            {submitting ? 'Submitting...' : `Submit — $${price}`}
          </button>
        </div>
      </form>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: 'var(--ink)',
  marginBottom: 6,
  letterSpacing: '0.02em',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  fontSize: 15,
  border: '1px solid var(--rule)',
  borderRadius: 10,
  background: 'var(--bg)',
  color: 'var(--ink)',
  fontFamily: 'inherit',
  outline: 'none',
}

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234a5e5f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 12px center',
  paddingRight: 40,
  cursor: 'pointer',
  maxWidth: 400,
}
