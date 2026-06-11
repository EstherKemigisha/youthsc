type HeroStat = {
  value: string
  label: string
}

type HeroStatsProps = {
  stats: readonly HeroStat[]
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="hero__stats" aria-label="Community highlights">
      {stats.map((stat) => (
        <div key={stat.label} className="hero__stat">
          <span className="hero__stat-value">{stat.value}</span>
          <span className="hero__stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
