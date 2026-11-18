'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { ApprovedDrawing } from '@/content/drawings'

export function DrawingsGallery({ drawings }: { drawings: ApprovedDrawing[] }) {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + drawings.length) % drawings.length)),
    [drawings.length],
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close, step])

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {drawings.map((d, i) => (
          <li key={d.image}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-md border border-border bg-card text-left"
              aria-label={`View drawing: ${d.caption}`}
            >
              <span className="relative block aspect-[4/3] bg-secondary">
                <Image src={d.image} alt={d.caption} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" sizes="(max-width: 1024px) 100vw, 33vw" />
              </span>
              <span className="flex items-center justify-between gap-2 p-4">
                <span className="text-sm font-medium">{d.caption}</span>
                {d.category && <span className="text-xs uppercase tracking-wider text-muted-foreground">{d.category}</span>}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Drawing viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={close}>
          <button type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <X className="size-6" />
          </button>
          {drawings.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous" className="absolute left-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                <ChevronLeft className="size-6" />
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                <ChevronRight className="size-6" />
              </button>
            </>
          )}
          <figure className="flex max-h-[90vh] max-w-5xl flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <Image
              src={drawings[open].image}
              alt={drawings[open].caption}
              width={drawings[open].width}
              height={drawings[open].height}
              className="max-h-[80vh] w-auto rounded-sm object-contain"
            />
            <figcaption className="text-sm text-white/80">{drawings[open].caption}</figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
