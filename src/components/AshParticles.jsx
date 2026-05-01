import { useMemo } from 'react'

const PARTICLE_COUNT = 55

export default function AshParticles() {
  const particles = useMemo(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const isEmber = i % 5 === 0
      const isLargeEmber = i % 17 === 0
      return {
        id: i,
        left: (i * 1.87 % 100),
        delay: (i * 0.29 % 16),
        duration: 14 + (i * 0.61 % 12),
        size: isLargeEmber ? 4 : isEmber ? 2 + (i % 2) : 1 + (i * 0.09 % 2.5),
        xDrift: ((i % 13) - 6) * 22,
        rotation: i * 41 % 360,
        isEmber,
        isLargeEmber,
      }
    })
  , [])

  return (
    <div className="ash-container" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className={`ash-particle${p.isLargeEmber ? ' large-ember' : p.isEmber ? ' ember' : ''}`}
          style={{
            left: `${p.left}%`,
            bottom: `-${p.size + 4}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            '--x-drift': `${p.xDrift}px`,
            '--rotation': `${p.rotation}deg`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
