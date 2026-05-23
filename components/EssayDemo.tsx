'use client'

import { useState, useEffect } from 'react'

const ESSAY_PARAGRAPHS = [
  {
    id: 'p1',
    text: 'The summer before junior year, I rewrote my personal statement eleven times. Not because I was bad at writing — I had straight A\'s in AP English — but because every draft sounded like someone else. Polished, careful, ',
    highlight: { id: 'p1-a', kind: 'weak' as const, word: 'college-essay shaped', tag: 'Voice · Fix', body: 'This is the insight. Lead with it — flip the opening so the first sentence is this observation. The eleven rewrites are evidence, not the hook.' },
    after: '.',
  },
  {
    id: 'p2',
    text: 'My counselor asked me one question in our second session: \'',
    highlight: { id: 'p2-a', kind: 'strong' as const, word: 'What would you write if no one was going to read it', tag: 'Thesis', body: 'This question IS the essay. Everything else is setup for this moment. Consider starting here, then flashing back to the eleven drafts.' },
    after: '\' I didn\'t have an answer. That bothered me more than the blank page.',
  },
  {
    id: 'p3',
    text: 'The essay I finally submitted was about my grandmother\'s garden — the way she never planted anything she couldn\'t eat, and what that taught me about ',
    highlight: { id: 'p3-a', kind: 'strong' as const, word: 'utility and beauty existing in the same space', tag: 'Voice', body: 'Strong thematic landing. Make sure the body of the garden section earns this abstraction with specific sensory detail first.' },
    after: '.',
  },
  {
    id: 'p4',
    text: 'I got into my first choice school. But what I remember most isn\'t the acceptance. It\'s the moment I ',
    highlight: { id: 'p4-a', kind: 'strong' as const, word: 'stopped trying to write what I thought they wanted to read', tag: 'Insight', body: 'Perfect closer. Honest, earned, not over-explained. This is the voice admissions readers remember.' },
    after: '.',
  },
]

const COACH_SCORES = [
  { label: 'Authenticity', value: 4.8, max: 5 },
  { label: 'Voice', value: 4.5, max: 5 },
  { label: 'Specificity', value: 3.8, max: 5 },
  { label: 'Structure', value: 4.2, max: 5 },
  { label: 'Hook', value: 4.0, max: 5 },
  { label: 'Reflection', value: 4.6, max: 5 },
]

type Tab = 'review' | 'scores' | 'notes'

export default function EssayDemo() {
  const [tab, setTab] = useState<Tab>('review')
  const [activeNote, setActiveNote] = useState<string | null>(null)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setPercent(1), 200)
    return () => clearTimeout(timer)
  }, [])

  const allNotes = ESSAY_PARAGRAPHS.map((p) => p.highlight)
  const activeNoteData = activeNote ? allNotes.find((n) => n.id === activeNote) ?? null : null

  return (
    <div className="demo-wrap">
      {/* Left panel — essay */}
      <div className="demo-card">
        <div className="demo-essay">
          <h4>Personal Statement — Draft 3</h4>
          {ESSAY_PARAGRAPHS.map((para) => (
            <p key={para.id}>
              {para.text}
              <span
                className={`highlight ${para.highlight.kind}`}
                onClick={() => setActiveNote(activeNote === para.highlight.id ? null : para.highlight.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveNote(activeNote === para.highlight.id ? null : para.highlight.id)
                  }
                }}
              >
                {para.highlight.word}
              </span>
              {para.after}
            </p>
          ))}
        </div>
        <div className="demo-essay-footer">
          <span>Student essay · 2024</span>
          <span className="pill">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#346b6e', display: 'inline-block' }} />
            Feedback delivered · 48 hrs
          </span>
        </div>
      </div>

      {/* Right panel — tabs */}
      <div className="demo-card">
        <div className="demo-tabs">
          <button
            className={`demo-tab${tab === 'review' ? ' active' : ''}`}
            onClick={() => setTab('review')}
          >
            Review
          </button>
          <button
            className={`demo-tab${tab === 'scores' ? ' active' : ''}`}
            onClick={() => setTab('scores')}
          >
            Scores
          </button>
          <button
            className={`demo-tab${tab === 'notes' ? ' active' : ''}`}
            onClick={() => setTab('notes')}
          >
            Notes
          </button>
        </div>

        {tab === 'review' && (
          <div style={{ flex: 1 }}>
            {activeNoteData ? (
              <div
                className="feedback-item active"
                style={{ flexDirection: 'column', gap: 8, cursor: 'default' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="tag">{activeNoteData.tag}</span>
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>
                    {activeNoteData.kind === 'strong' ? 'Strength' : 'Needs work'}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                  {activeNoteData.body}
                </p>
                <p style={{ margin: 0, fontSize: 12, color: 'var(--accent)', fontStyle: 'italic' }}>
                  &ldquo;{activeNoteData.word}&rdquo;
                </p>
              </div>
            ) : (
              <div style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6 }}>
                <p style={{ margin: '0 0 12px' }}>Click any highlighted passage in the essay to read the coach&apos;s note for that section.</p>
                <p style={{ margin: 0, fontSize: 13 }}>Yellow = coach suggestion &nbsp;·&nbsp; Green = strong passage</p>
              </div>
            )}
          </div>
        )}

        {tab === 'scores' && (
          <div className="score-card" style={{ flex: 1 }}>
            {COACH_SCORES.map((score) => (
              <div key={score.label} className="score-row">
                <div className="score-label">
                  <span className="swatch" />
                  {score.label}
                </div>
                <div className="score-bar">
                  <span style={{ width: `${score.value / score.max * 100 * percent}%` }} />
                </div>
                <div className="score-num">{score.value}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 'notes' && (
          <div className="feedback-list" style={{ flex: 1, marginTop: 0 }}>
            {allNotes.map((note) => (
              <div
                key={note.id}
                className={`feedback-item${activeNote === note.id ? ' active' : ''}`}
                onClick={() => {
                  setActiveNote(activeNote === note.id ? null : note.id)
                  setTab('review')
                }}
              >
                <span className="tag">{note.tag}</span>
                <span>{note.body}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
