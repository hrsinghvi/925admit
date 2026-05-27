'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const ESSAY_TYPES = [
  { value: 'common-app', label: 'Common App essay' },
  { value: 'supplemental', label: 'Supplemental essay' },
  { value: 'uc-piq', label: 'UC PIQ' },
  { value: 'letter', label: 'Letter of continued interest' },
]

const WORD_COUNT_OPTIONS = [
  { value: '0-75', label: '0–75 words', price: 10 },
  { value: '76-150', label: '76–150 words', price: 20 },
  { value: '151-300', label: '151–300 words', price: 30 },
  { value: '301-450', label: '301–450 words', price: 40 },
  { value: '451-650', label: '451–650 words', price: 50 },
  { value: '651-850', label: '651–850 words', price: 60 },
]

const TURNAROUND_OPTIONS = [
  { value: '1-week', label: '1 week' },
  { value: '5-days', label: '5 days' },
  { value: '3-days', label: '3 days' },
  { value: '1-day', label: '1 day' },
]

const BASE_PRICES: Record<string, number> = {
  'common-app': 50,
  'uc-piq': 40,
}

function getPrice(type: string, wordCount: string): number {
  if (type === 'supplemental' || type === 'letter') {
    const wc = WORD_COUNT_OPTIONS.find(w => w.value === wordCount)
    return wc?.price ?? 10
  }
  return BASE_PRICES[type] ?? 0
}

const showWordCount = (type: string) => type === 'supplemental' || type === 'letter'
const showSchool = (type: string) => type === 'supplemental' || type === 'letter'

export default function EssayReviewPage() {
  const [type, setType] = useState('common-app')
  const [school, setSchool] = useState('')
  const [wordCount, setWordCount] = useState('0-75')
  const [turnaround, setTurnaround] = useState('1-week')
  const [prompt, setPrompt] = useState('')
  const [essay, setEssay] = useState('')
  const [comments, setComments] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const price = useMemo(() => getPrice(type, wordCount), [type, wordCount])
  const isLetter = type === 'letter'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: 'essay-review',
          name,
          email,
          type: ESSAY_TYPES.find(t => t.value === type)?.label,
          school: showSchool(type) ? school : '',
          wordCount: showWordCount(type) ? WORD_COUNT_OPTIONS.find(w => w.value === wordCount)?.label : '',
          turnaround: TURNAROUND_OPTIONS.find(t => t.value === turnaround)?.label,
          prompt,
          essay,
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
          We&apos;ve received your essay and will get back to you within your selected turnaround window.
        </p>
        <Link href="/" style={{ color: 'var(--accent)', fontSize: 16 }}>← Back to home</Link>
      </div>
    )
  }

  return (
    <div className="shell" style={{ paddingTop: 80, paddingBottom: 80 }}>
      <p className="eyebrow" style={{ marginBottom: 24 }}>Submit</p>
      <h1 className="display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginBottom: 12 }}>
        Essay <em className="italic" style={{ color: 'var(--accent)' }}>Review</em>
      </h1>
      <p style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 48, maxWidth: '50ch' }}>
        Fill out the form below and we&apos;ll get your essay back with detailed, annotated feedback.
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
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>Essay Review</span>
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
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your name"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Type */}
          <div>
            <label style={labelStyle}>Type</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <select value={type} onChange={e => setType(e.target.value)} style={selectStyle}>
                {ESSAY_TYPES.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              <Link href="/pricing" style={{ fontSize: 13, color: 'var(--accent)', whiteSpace: 'nowrap' }}>
                View pricing →
              </Link>
            </div>
          </div>

          {/* School (conditional) */}
          {showSchool(type) && (
            <div>
              <label style={labelStyle}>School</label>
              <input
                type="text"
                value={school}
                onChange={e => setSchool(e.target.value)}
                placeholder="School name"
                style={inputStyle}
              />
            </div>
          )}

          {/* Word Count (conditional) */}
          {showWordCount(type) && (
            <div>
              <label style={labelStyle}>Word Count</label>
              <select value={wordCount} onChange={e => setWordCount(e.target.value)} style={selectStyle}>
                {WORD_COUNT_OPTIONS.map(w => (
                  <option key={w.value} value={w.value}>{w.label}</option>
                ))}
              </select>
            </div>
          )}

          {/* Turnaround */}
          <div>
            <label style={labelStyle}>Turnaround Time</label>
            <select value={turnaround} onChange={e => setTurnaround(e.target.value)} style={selectStyle}>
              {TURNAROUND_OPTIONS.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          {/* Prompt */}
          <div>
            <label style={labelStyle}>{isLetter ? 'Context' : 'Essay Prompt'}</label>
            <input
              type="text"
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder={isLetter ? 'School and context for the letter' : 'Essay prompt (and word limit)'}
              style={inputStyle}
            />
          </div>

          {/* Essay text */}
          <div>
            <label style={labelStyle}>{isLetter ? 'Letter' : 'Essay'}</label>
            <textarea
              required
              value={essay}
              onChange={e => setEssay(e.target.value)}
              placeholder={isLetter ? 'Paste your letter here' : 'Paste your essay here'}
              rows={10}
              style={{ ...inputStyle, resize: 'vertical', minHeight: 200 }}
            />
          </div>

          {/* Comments */}
          <div>
            <label style={labelStyle}>Comments</label>
            <textarea
              value={comments}
              onChange={e => setComments(e.target.value)}
              placeholder="Any comments for your consultant?"
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
