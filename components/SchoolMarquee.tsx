'use client'

const MARQUEE_SCHOOLS = [
  { name: 'Stanford', color: '#8C1515' },
  { name: 'Harvard', color: '#A51C30' },
  { name: 'UC Berkeley', color: '#003262' },
  { name: 'MIT', color: '#A31F34' },
  { name: 'Yale', color: '#00356B' },
  { name: 'Princeton', color: '#E77500' },
  { name: 'Brown', color: '#4E3629' },
  { name: 'Dartmouth', color: '#00693E' },
  { name: 'Cornell', color: '#B31B1B' },
  { name: 'Duke', color: '#001A57' },
  { name: 'USC', color: '#990000' },
  { name: 'UCLA', color: '#2D68C4' },
  { name: 'NYU', color: '#57068C' },
  { name: 'Columbia', color: '#003087' },
]

export default function SchoolMarquee() {
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-16 items-center whitespace-nowrap"
        style={{ animation: 'marquee 35s linear infinite' }}
      >
        {[...MARQUEE_SCHOOLS, ...MARQUEE_SCHOOLS].map((school, i) => (
          <span
            key={`${school.name}-${i}`}
            className="text-2xl font-serif font-medium tracking-tight"
            style={{ color: school.color }}
          >
            {school.name}
          </span>
        ))}
      </div>
    </div>
  )
}
