interface TeamCardProps {
  name: string
  role: string
  initials: string
  bio: string
}

export default function TeamCard({ name, role, initials, bio }: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6 text-center">
      <div
        className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg"
        aria-hidden="true"
      >
        {initials}
      </div>
      <h3 className="font-serif text-xl text-brand-dark">{name}</h3>
      <p className="text-sm text-accent mt-1">{role}</p>
      <p className="text-sm text-brand-neutral mt-3">{bio}</p>
    </div>
  )
}
