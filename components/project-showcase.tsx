import Image from 'next/image'
import { getProject } from '@/content/projects'

// Renders a "recent project(s)" section from a list of project slugs.
// Shows the case-study text where the client has supplied it, otherwise the
// scope line. Renders nothing if no valid projects are given.
export function ProjectShowcase({ slugs, heading }: { slugs: string[]; heading?: string }) {
  const projects = slugs.map(getProject).filter((p) => p !== undefined)
  if (projects.length === 0) return null

  const title = heading ?? `Recent ${projects.length > 1 ? 'projects' : 'project'}`

  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {projects.map((p) => (
            <article key={p!.slug} className="flex flex-col overflow-hidden rounded-md border border-border bg-card">
              <div className="relative aspect-[16/10]">
                <Image
                  src={p!.image || '/placeholder.svg'}
                  alt={`${p!.title}, ${p!.location}`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                {p!.status && (
                  <span className="absolute left-3 top-3 rounded-sm bg-background px-2 py-1 text-xs font-semibold">{p!.status}</span>
                )}
              </div>
              <div className="flex flex-col gap-3 p-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {p!.type} · {p!.region}
                  </p>
                  <h3 className="font-display text-xl font-bold">
                    {p!.title}, {p!.location}
                  </h3>
                </div>
                <p className="leading-relaxed text-muted-foreground">{p!.caseStudy ?? p!.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
