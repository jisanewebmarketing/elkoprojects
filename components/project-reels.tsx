'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import type { Reel } from '@/content/reels'

export function ProjectReels({
  reels,
  eyebrow = 'On site',
  title = 'Straight from our sites',
  intro,
  className = 'bg-secondary py-20',
}: {
  reels: Reel[]
  eyebrow?: string
  title?: string
  intro?: string
  className?: string
}) {
  if (reels.length === 0) return null
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} body={intro} />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reels.map((r) => (
            <ReelCard key={r.src} reel={r} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function ReelCard({ reel }: { reel: Reel }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)

  // Only play while the card is in view — saves bandwidth and CPU, and avoids
  // several clips competing for the viewport at once.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.4 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    if (!v.muted) v.play().catch(() => {})
  }

  return (
    <li className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <div className="relative aspect-[9/16] bg-ink">
        <video
          ref={videoRef}
          className="size-full object-cover"
          src={reel.src}
          poster={reel.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={`${reel.title}, ${reel.location}`}
        />
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute video' : 'Mute video'}
          className="absolute bottom-3 right-3 rounded-full bg-ink/70 p-2.5 text-ink-foreground backdrop-blur-sm transition-colors hover:bg-ink"
        >
          {muted ? <VolumeX className="size-4" aria-hidden /> : <Volume2 className="size-4" aria-hidden />}
        </button>
        <div className="absolute left-3 top-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink-foreground backdrop-blur-sm">
            {reel.location}
          </span>
          {reel.tag && (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              {reel.tag}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 p-4">
        <h3 className="font-display text-lg font-bold">{reel.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{reel.blurb}</p>
      </div>
    </li>
  )
}
