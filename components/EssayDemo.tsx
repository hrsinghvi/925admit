'use client'

import { useState, useEffect } from 'react'

const ESSAY_PARAGRAPHS = [
  {
    id: 'p1',
    text: 'My mother makes chai the wrong way. Too much ginger, cardamom so strong it numbs your tongue, and she never uses a timer — just instinct and the particular shade of brown she learned from her mother in Jaipur. For years I was ',
    highlight: { id: 'p1-a', kind: 'weak' as const, word: 'embarrassed by this chai', tag: 'Voice · Dig Deeper', body: 'The word "embarrassed" is doing heavy lifting but not earning it. What did that embarrassment look like in practice? Did you hide the thermos? Refuse when friends came over? The specific behavior is stronger than the label.' },
    after: '. I wanted the Starbucks cup my friends carried like a passport.',
  },
  {
    id: 'p2',
    text: 'When I left for debate camp the summer before junior year, she packed a thermos of it. I didn\'t open it for three days. On the fourth — homesick in a way I hadn\'t expected — I did. And ',
    highlight: { id: 'p2-a', kind: 'strong' as const, word: 'the smell arrived before the taste', tag: 'Voice · Sensory', body: 'This is exactly right. Smell as memory-trigger earns its place here because of the specificity that follows. Don\'t cut it — make sure the next sentence pays it off with equal precision.' },
    after: '. For a moment I wasn\'t in a dorm room in Ohio. I was in her kitchen.',
  },
  {
    id: 'p3',
    text: 'I had spent years ',
    highlight: { id: 'p3-a', kind: 'weak' as const, word: 'trying to translate myself into something easier to explain', tag: 'Voice · Too Abstract', body: 'This is the essay\'s emotional core, but it\'s stated too generally. "Translate myself" is evocative but stays on the surface. Give us one scene — a moment you made this choice. The reader needs to see the decision, not just hear the conclusion.' },
    after: ' — the kid who was good at debate, not the one who still took off his shoes at the door and touched his grandparents\' feet at every visit.',
  },
  {
    id: 'p4',
    text: 'My coach asked me to write about what I couldn\'t put on a résumé. I wrote about chai. Somewhere in the writing, I understood: I had been ',
    highlight: { id: 'p4-a', kind: 'strong' as const, word: 'editing myself for the wrong audience my entire life', tag: 'Insight · Closer', body: 'Perfect. This is the sentence the whole essay builds to. The "editing" metaphor connects to writing, to the essay itself, to the translation theme — it earns its abstraction because everything before it was concrete. Don\'t over-explain. Let it land.' },
    after: '.',
  },
]

const COACH_SCORES = [
  { label: 'Authenticity', value: 4.9, max: 5 },
  { label: 'Voice', value: 4.6, max: 5 },
  { label: 'Specificity', value: 4.1, max: 5 },
  { label: 'Structure', value: 4.3, max: 5 },
  { label: 'Hook', value: 4.7, max: 5 },
  { label: 'Reflection', value: 4.8, max: 5 },
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
            {allNotes.slice(0, 3).map((note) => (
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
