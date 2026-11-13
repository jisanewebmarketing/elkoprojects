'use client'

import { useState } from 'react'

const rates: Record<string, [number, number]> = {
  'Bathroom renovation': [3500, 6000],
  'Kitchen renovation': [3000, 5500],
  'Full home renovation': [2800, 5000],
  'New home build': [3800, 6500],
  'Granny flat': [3000, 4500],
  'Office fit out': [1500, 3200],
}

const fmt = (n: number) =>
  n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 })

export function CostEstimator() {
  const [type, setType] = useState('Full home renovation')
  const [size, setSize] = useState(120)
  const [low, high] = rates[type]

  return (
    <section aria-labelledby="estimator-title" className="rounded-md bg-ink p-6 text-ink-foreground">
      <h2 id="estimator-title" className="font-display text-xl font-bold">Cost estimator</h2>
      <p className="mt-1 text-sm text-ink-foreground/75">An indicative range before your consultation.</p>
      <div className="mt-5 flex flex-col gap-4">
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Project type
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-sm border border-ink-foreground/25 bg-ink px-3 py-2.5 text-base font-normal"
          >
            {Object.keys(rates).map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold">
          <span className="flex justify-between">
            Size <span className="font-normal">{`${size} m²`}</span>
          </span>
          <input
            type="range"
            min={5}
            max={400}
            step={5}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="accent-accent"
          />
        </label>
      </div>
      <p className="mt-6 border-t border-ink-foreground/20 pt-4" aria-live="polite">
        <span className="block text-xs uppercase tracking-widest text-ink-foreground/70">Indicative range</span>
        <span className="font-display text-3xl font-extrabold">{`${fmt(low * size)} to ${fmt(high * size)}`}</span>
      </p>
    </section>
  )
}
