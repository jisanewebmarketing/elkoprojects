'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { ArrowRight, Pause, Play } from 'lucide-react'
import { combinedExperienceLine } from '@/content/company'

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden text-ink-foreground">
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 size-full object-cover"
        src="/videos/elko-hero.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/40" aria-hidden />

      <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-32 lg:px-8 lg:pb-16">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="rise mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-ink-foreground/85">
              Premium construction · Greater Sydney
            </p>
            <h1
              className="rise text-balance text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-8xl"
              style={{ animationDelay: '120ms' }}
            >
              Quality builds. Overseen by the Directors.
            </h1>
            <p
              className="rise mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-foreground/90"
              style={{ animationDelay: '240ms' }}
            >
              Renovations, new homes, commercial fit outs and remedial works, with Elias and Marko personally on your
              project from first meeting to final handover.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '360ms' }}>
              <Link
                href="/book-a-consultation"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a free site visit &amp; quote <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                href="/completed-projects"
                className="inline-flex items-center gap-2 rounded-sm border border-ink-foreground/60 px-6 py-3.5 font-semibold backdrop-blur-sm transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                View our projects
              </Link>
            </div>
          </div>

          <aside
            className="rise rounded-md bg-background/95 p-5 text-foreground shadow-xl lg:col-span-4"
            style={{ animationDelay: '480ms' }}
            aria-label="Director sign-off"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Director sign-off</p>
            <p className="mt-2 text-pretty font-display text-lg font-bold leading-snug">
              Every Elko project is quoted, built and handed over by the same two directors.
            </p>
            <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex -space-x-2">
                <span className="flex size-10 items-center justify-center rounded-full border-2 border-background bg-ink font-display text-sm font-bold text-ink-foreground">EN</span>
                <span className="flex size-10 items-center justify-center rounded-full border-2 border-background bg-primary font-display text-sm font-bold text-primary-foreground">MB</span>
              </div>
              <p className="text-sm leading-tight">
                <span className="block font-semibold">Elias Nader & Marko Bratkovic</span>
                <span className="text-muted-foreground">Directors · {combinedExperienceLine}</span>
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-ink-foreground/25 pt-5 text-sm text-ink-foreground/85">
          <p>Footage: St Ives, Lane Cove, Dural, Yowie Bay and Sylvania projects</p>
          <button
            type="button"
            onClick={toggle}
            className="flex items-center gap-2 rounded-sm px-2 py-1 font-medium hover:bg-ink-foreground/10"
            aria-label={playing ? 'Pause background video' : 'Play background video'}
          >
            {playing ? <Pause className="size-4" aria-hidden /> : <Play className="size-4" aria-hidden />}
            <span className="hidden sm:inline">{playing ? 'Pause' : 'Play'}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
