import { process } from '@/lib/site-data'

export function ProcessSteps() {
  return (
    <section className="bg-ink py-24 text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">How we deliver</p>
          <h2 className="text-balance text-4xl font-extrabold leading-[1.02] md:text-5xl">
            A stage-gate process that protects your budget and programme.
          </h2>
        </div>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-md bg-ink-foreground/15 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-4 bg-ink p-6">
              <span className="font-display text-5xl font-extrabold text-accent">{i + 1}</span>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="leading-relaxed text-ink-foreground/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
