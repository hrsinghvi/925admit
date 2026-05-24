'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'

interface Highlight {
  id: string
  word: string
  tag: string
  body: string
}

type Segment = { type: 'text'; text: string } | { type: 'highlight'; highlight: Highlight }

const DRAFT1: { id: string; segments: Segment[] }[] = [
  {
    id: 'p1',
    segments: [
      { type: 'highlight', highlight: { id: 'h1', word: 'My name is Krishang and I am a very good leader.', tag: 'Opening · Too Declarative', body: 'Admissions officers read thousands of essays. Starting with your name and a self-assessment gives them no reason to keep reading. Drop this — start with a scene.' } },
      { type: 'text', text: ' I have done a lot of leadership things in my life but this one is the best one. ' },
      { type: 'highlight', highlight: { id: 'h2', word: 'Leadership is very important and I think everyone should be a leader.', tag: 'Voice · Generic Claim', body: 'This reads like a civics essay, not a college application. Avoid stating universal values — show what leadership means through what you specifically did.' } },
      { type: 'text', text: ' ' },
      { type: 'highlight', highlight: { id: 'h3', word: 'I am going to tell you about the time I was a leader.', tag: 'Structure · Roadmap Sentence', body: 'Never announce what you\'re about to do. Just do it. This sentence delays the story and signals to the reader that nothing interesting has happened yet.' } },
    ],
  },
  {
    id: 'p2',
    segments: [
      { type: 'text', text: 'I go to a martial arts gym. ' },
      { type: 'highlight', highlight: { id: 'h4', word: 'Martial arts is when you fight people.', tag: 'Voice · Unnecessary Definition', body: 'You don\'t need to define martial arts. This makes you sound uncertain about your reader. Trust that they understand — and if they don\'t, the story will teach them.' } },
      { type: 'text', text: ' One day I saw some families leave the gym. They left because it was expensive. I felt bad for them. This made me want to do something. ' },
      { type: 'highlight', highlight: { id: 'h5', word: 'I am a very caring person who cares about others.', tag: 'Voice · Telling Not Showing', body: 'Telling the reader you\'re caring is the opposite of demonstrating it. The families leaving is your proof — let that moment speak for itself.' } },
    ],
  },
  {
    id: 'p3',
    segments: [
      { type: 'text', text: 'I have been doing Jiu-Jitsu for 8 years. ' },
      { type: 'highlight', highlight: { id: 'h6', word: 'It changed my life completely.', tag: 'Voice · Vague Claim', body: 'This is the most important sentence in the paragraph but the least specific. How did it change your life? What can you do now that you couldn\'t before? Give the reader something concrete.' } },
      { type: 'text', text: ' ' },
      { type: 'highlight', highlight: { id: 'h7', word: 'I was shy before and now I am not shy anymore.', tag: 'Voice · State Don\'t Show', body: 'You\'re summarizing a transformation instead of letting the reader feel it. Show us one moment from before and one from after. The contrast will do the work this sentence is trying to do.' } },
      { type: 'text', text: ' Jiu-Jitsu did that. ' },
      { type: 'highlight', highlight: { id: 'h8', word: 'It is a very good sport and everyone should try it.', tag: 'Voice · Generic Endorsement', body: 'This is filler. It adds nothing to your story and reads like you ran out of things to say. Cut it entirely.' } },
    ],
  },
  {
    id: 'p4',
    segments: [
      { type: 'text', text: 'So me and my brother started a free program. It was hard. The gym owner did not want to let us at first but then he said yes. I wrote a proposal. ' },
      { type: 'highlight', highlight: { id: 'h9', word: 'A proposal is a document that explains your idea.', tag: 'Voice · Unnecessary Definition', body: 'Same problem as defining martial arts earlier. The reader knows what a proposal is. Spend these words on what was actually in your proposal — that\'s the interesting part.' } },
      { type: 'text', text: ' He read it and said okay. ' },
      { type: 'highlight', highlight: { id: 'h10', word: 'This showed my leadership skills.', tag: 'Insight · Telling Not Showing', body: 'This is the weakest sentence to end on. You don\'t need to label what you demonstrated — if the story is told well, the reader already sees the leadership. Trust your narrative.' } },
    ],
  },
]

const DRAFT2_PARAGRAPHS = [
  'I started noticing something at my martial arts gym long before I ever thought about teaching. Families would walk in, ask about enrollment, hear the price, and quietly leave. The kids always looked back at the mats before following their parents out. Seeing that happen over and over made me realize how many students never got the chance to practice martial arts because of the cost.',
  'The thought stayed with me because I knew what the training had done for me. When I was younger, I struggled with confidence and rarely spoke up. Practicing Jiu-Jitsu for the last eight years changed that for me.',
  'So in my sophomore year, my twin brother and I came up with an idea to start a free program with one goal: to create a space where kids who could not afford martial arts would be welcomed.',
  'It took three months to convince the gym owner, Professor Crispim, to let me use the space. I wrote a proposal explaining the purpose of the program, how every session would be supervised, and how the safety rules would be enforced. He had concerns, but after several adjustments, he agreed to a Sunday 2–4 pm slot.',
]

function TooltipHighlight({ highlight }: { highlight: Highlight }) {
  const [rect, setRect] = useState<DOMRect | null>(null)

  return (
    <span
      onMouseEnter={(e) => setRect(e.currentTarget.getBoundingClientRect())}
      onMouseLeave={() => setRect(null)}
    >
      <span style={{
        background: 'rgba(234, 179, 8, 0.25)',
        borderBottom: '2px solid rgba(234, 179, 8, 0.7)',
        borderRadius: 2,
        cursor: 'default',
        padding: '0 1px',
      }}>
        {highlight.word}
      </span>

      {rect && createPortal(
        <div style={{
          position: 'fixed',
          left: Math.min(rect.left + rect.width / 2, window.innerWidth - 150),
          top: rect.top - 8,
          transform: 'translate(-50%, -100%)',
          background: '#1a2e2f',
          color: '#fff',
          borderRadius: 10,
          padding: '10px 14px',
          width: 260,
          zIndex: 9999,
          boxShadow: '0 4px 20px rgba(0,0,0,0.22)',
          pointerEvents: 'none',
        }}>
          <span style={{
            display: 'block',
            fontSize: 10,
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#f59e0b',
            marginBottom: 6,
          }}>
            {highlight.tag}
          </span>
          <span style={{ fontSize: 12.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)' }}>
            {highlight.body}
          </span>
          <span style={{
            position: 'absolute',
            bottom: -6,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 12,
            height: 6,
            background: '#1a2e2f',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            display: 'block',
          }} />
        </div>,
        document.body
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
          <span>Student essay · 2024</span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>Yellow = needs revision</span>
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
          <span>Student essay · 2024</span>
          <span className="pill">
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#346b6e', display: 'inline-block' }} />
            Feedback delivered · 48 hrs
          </span>
        </div>
      </div>
    </div>
  )
}
