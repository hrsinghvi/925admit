'use client'

import { useState, useRef } from 'react'
import { createPortal } from 'react-dom'

type HighlightColor = 'red' | 'yellow' | 'green'

interface Highlight {
  id: string
  word: string
  tag: string
  body: string
  color: HighlightColor
}

type Segment = { type: 'text'; text: string } | { type: 'highlight'; highlight: Highlight }

const HIGHLIGHT_STYLES: Record<HighlightColor, { bg: string; border: string }> = {
  red:    { bg: 'rgba(239,68,68,0.18)',   border: 'rgba(239,68,68,0.6)' },
  yellow: { bg: 'rgba(234,179,8,0.22)',   border: 'rgba(234,179,8,0.7)' },
  green:  { bg: 'rgba(52,107,110,0.18)',  border: 'rgba(52,107,110,0.65)' },
}

const DRAFT1: { id: string; segments: Segment[] }[] = [
  {
    id: 'p1',
    segments: [
      { type: 'highlight', highlight: { id: 'h1', color: 'red', word: 'My name is Krishang and I am a very good leader.', tag: 'Opening · Too Declarative', body: 'Admissions officers read thousands of essays. Starting with your name and a self-assessment gives them no reason to keep reading. Drop this — start with a scene.' } },
      { type: 'text', text: ' I have done a lot of leadership things in my life but this one is the best one. ' },
      { type: 'highlight', highlight: { id: 'h2', color: 'yellow', word: 'Leadership is very important and I think everyone should be a leader.', tag: 'Voice · Generic Claim', body: 'Avoid stating universal values — show what leadership means through what you specifically did and felt. Any applicant could write this sentence.' } },
      { type: 'text', text: ' ' },
      { type: 'highlight', highlight: { id: 'h3', color: 'red', word: 'I am going to tell you about the time I was a leader.', tag: 'Structure · Roadmap Sentence', body: 'Never announce what you\'re about to do. Just do it. This signals to the reader that nothing interesting has happened yet.' } },
    ],
  },
  {
    id: 'p2',
    segments: [
      { type: 'text', text: 'I go to a martial arts gym. ' },
      { type: 'highlight', highlight: { id: 'h4', color: 'yellow', word: 'Martial arts is when you fight people.', tag: 'Voice · Unnecessary Definition', body: 'You don\'t need to define martial arts. This makes you sound uncertain. Trust your reader — and if they don\'t know the term, the story will teach them.' } },
      { type: 'text', text: ' ' },
      { type: 'highlight', highlight: { id: 'h5', color: 'green', word: 'One day I saw some families leave the gym. They left because it was expensive.', tag: 'Detail · Strong Observation', body: 'This is the best moment in the draft — specific and visual. The improved version builds the whole essay around this. Develop it more: what did the kids\' faces look like? What did you feel?' } },
      { type: 'text', text: ' I felt bad for them. This made me want to do something. ' },
      { type: 'highlight', highlight: { id: 'h6', color: 'red', word: 'I am a very caring person who cares about others.', tag: 'Voice · Telling Not Showing', body: 'This is the weakest sentence in the draft. Telling the reader you\'re caring is the opposite of demonstrating it. The families leaving is your proof — let that moment speak for itself.' } },
    ],
  },
  {
    id: 'p3',
    segments: [
      { type: 'text', text: 'I decided to start a free program for kids who could not afford the lessons. I talked to the gym owner and wrote a proposal. He said yes. I organized everything and made a schedule. Now we have class every Sunday and kids come to learn. ' },
      { type: 'highlight', highlight: { id: 'h7', color: 'red', word: 'I feel proud of what I did and I think I made a difference.', tag: 'Closing · Tells Instead of Shows', body: 'Ending with how proud you feel puts the focus on you rather than the impact. Close with a specific moment — a kid landing their first technique, a parent saying thank you — that makes the reader feel what you felt.' } },
    ],
  },
]

const DRAFT2_PARAGRAPHS = [
  'I started noticing something at my martial arts gym long before I ever thought about teaching. Families would walk in, ask about enrollment, hear the price, and quietly leave. The kids always looked back at the mats before following their parents out. Seeing that happen over and over made me realize how many students never got the chance to practice martial arts because of the cost.',
  'The thought stayed with me because I knew what the training had done for me. When I was younger, I struggled with confidence and rarely spoke up. Practicing Jiu-Jitsu for the last eight years changed that for me.',
  'I approached Professor Jackson and asked if I could run a free class on Sunday afternoons.',
]

function TooltipHighlight({ highlight }: { highlight: Highlight }) {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)
  const ref = useRef<HTMLSpanElement>(null)
  const hStyle = HIGHLIGHT_STYLES[highlight.color]

  function handleEnter() {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({
      top: rect.top - 10,
      left: rect.left + rect.width / 2,
    })
  }

  return (
    <span
      ref={ref}
      style={{ display: 'inline' }}
      onMouseEnter={handleEnter}
      onMouseLeave={() => setPos(null)}
    >
      <span style={{
        background: hStyle.bg,
        borderBottom: `2px solid ${hStyle.border}`,
        borderRadius: 2,
        cursor: 'default',
        padding: '1px 1px 0',
        transition: 'background 150ms',
      }}>
        {highlight.word}
      </span>
      {pos && createPortal(
        <span className="tooltip-popup" style={{
          position: 'fixed',
          top: pos.top,
          left: pos.left,
          transform: 'translate(-50%, -100%)',
          background: '#FBF8F3',
          color: '#15140F',
          border: '1px solid #15140F',
          borderRadius: 10,
          padding: '10px 14px',
          width: 268,
          zIndex: 9999,
          boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
          pointerEvents: 'none',
        }}>
          <span style={{
            display: 'block',
            fontSize: 10,
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: highlight.color === 'red' ? '#dc2626' : highlight.color === 'yellow' ? '#b45309' : '#346b6e',
            marginBottom: 6,
          }}>
            {highlight.tag}
          </span>
          <span style={{ fontSize: 12.5, lineHeight: 1.55, color: '#15140F' }}>
            {highlight.body}
          </span>
          <span style={{
            position: 'absolute',
            bottom: -6,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 12,
            height: 6,
            overflow: 'hidden',
          }}>
            <span style={{
              position: 'absolute',
              width: 10,
              height: 10,
              background: '#FBF8F3',
              border: '1px solid #15140F',
              transform: 'rotate(45deg)',
              bottom: 2,
              left: 1,
            }} />
          </span>
        </span>
        , document.body
      )}
    </span>
  )
}

export default function EssayDemo() {
  return (
    <div className="demo-wrap">
      {/* Left panel — Draft 1 */}
      <div className="demo-card">
        <div className="demo-essay">
          <h4>Personal Statement — Draft 1</h4>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 16, marginTop: -4 }}>
            Hover over highlighted text to see coach feedback.
          </p>
          {DRAFT1.map((para) => (
            <p key={para.id} style={{ lineHeight: 1.75 }}>
              {para.segments.map((seg, i) =>
                seg.type === 'text'
                  ? <span key={i}>{seg.text}</span>
                  : <TooltipHighlight key={seg.highlight.id} highlight={seg.highlight} />
              )}
            </p>
          ))}
        </div>
        <div className="demo-essay-footer">
          <span>Student essay · 2026</span>
        </div>
      </div>

      {/* Right panel — Draft 2 */}
      <div className="demo-card">
        <div className="demo-essay">
          <h4>Personal Statement — Draft 2</h4>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 16, marginTop: -4 }}>
            After one coaching session.
          </p>
          {DRAFT2_PARAGRAPHS.map((text, i) => (
            <p key={i} style={{ lineHeight: 1.75 }}>{text}</p>
          ))}
        </div>
        <div className="demo-essay-footer">
          <span>Student essay</span>
          <span style={{ fontSize: 13, color: 'var(--muted)' }}>A week later</span>
        </div>
      </div>
    </div>
  )
}
