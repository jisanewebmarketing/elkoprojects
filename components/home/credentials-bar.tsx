import { credentials } from '@/lib/site-data'

export function CredentialsBar() {
  return (
    <section aria-label="Licences and memberships" className="border-b border-border bg-background">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {credentials.map((c) => (
          <div key={c.label} className="flex flex-col gap-1 border-border py-6 pr-4 lg:border-r lg:pl-6 lg:first:pl-0 lg:last:border-r-0">
            <dt className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</dt>
            <dd className="font-display text-lg font-bold">{c.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
