import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)
  const [lead, ...rest] = featured
  const side = rest.slice(0, 4)
  if (!lead) return null

  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Featured projects" title="The work speaks first." />
          <Link href="/completed-projects" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            All completed projects <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <ProjectTile project={lead} large />
          <div className="grid grid-cols-2 gap-4">
            {side.map((p) => (
              <ProjectTile key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectTile({ project, large = false }: { project: (typeof projects)[number]; large?: boolean }) {
  return (
    <figure className="group flex flex-col gap-3">
      <div className={`relative overflow-hidden rounded-md ${large ? 'aspect-[4/5]' : 'aspect-[4/5]'}`}>
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title}, ${project.location}`}
          fill
          sizes={large ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {project.status && (
          <span className="absolute left-3 top-3 rounded-sm bg-background px-2 py-1 text-xs font-semibold">{project.status}</span>
        )}
      </div>
      <figcaption>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {project.category} · {project.region}
        </p>
        <p className={`font-display font-bold ${large ? 'text-2xl' : 'text-base'}`}>
          {project.title}, {project.location}
        </p>
        {large && <p className="mt-1 text-muted-foreground">{project.scope}</p>}
      </figcaption>
    </figure>
  )
}
