import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  body,
  className,
  align = 'left',
}: {
  eyebrow: string
  title: string
  body?: string
  className?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('flex max-w-3xl flex-col gap-4', align === 'center' && 'mx-auto items-center text-center', className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-extrabold leading-[1.02] md:text-5xl">{title}</h2>
      {body && <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{body}</p>}
    </div>
  )
}
