'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Building2,
  ChevronDown,
  ClipboardCheck,
  HardHat,
  HeartHandshake,
  Home,
  LayoutTemplate,
  Menu,
  Phone,
  Route,
  ShieldCheck,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { contact } from '@/content/company'
import { mainNav, type NavItem, type NavLink } from '@/content/navigation'
import { Wordmark } from '@/components/wordmark'

const CTA_HREF = '/book-a-consultation'
const CTA_LABEL = 'Free site visit & quote'

const icons: Record<string, LucideIcon> = {
  Home,
  Building2,
  HardHat,
  LayoutTemplate,
  HeartHandshake,
  ClipboardCheck,
  Users,
  Route,
  ShieldCheck,
}

function isActive(pathname: string, item: NavItem) {
  if (item.href && (pathname === item.href || pathname.startsWith(item.href + '/'))) return true
  return (item.children ?? []).some((c) => pathname === c.href || pathname.startsWith(c.href + '/'))
}

export function SiteHeader() {
  const pathname = usePathname()
  const overHero = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const transparent = overHero && !scrolled && !open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        transparent ? 'bg-transparent text-ink-foreground' : 'border-b border-border bg-background/95 text-foreground backdrop-blur',
      )}
    >
      <div className="relative mx-auto flex h-20 max-w-[90rem] items-center justify-between gap-4 px-5 lg:h-24 lg:px-8">
        <Link href="/" aria-label="Elko Projects home" className="shrink-0">
          <Wordmark inverted={transparent} className="h-14 lg:h-18" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) => (
              <DesktopItem key={item.label} item={item} pathname={pathname} transparent={transparent} />
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={CTA_HREF}
            className="hidden whitespace-nowrap rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {CTA_LABEL}
          </Link>
          <button
            type="button"
            className={cn('rounded-sm p-2 lg:hidden', transparent ? 'hover:bg-ink-foreground/10' : 'hover:bg-secondary')}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && <MobileDrawer pathname={pathname} />}
    </header>
  )
}

/* ----------------------------- desktop ----------------------------- */

function DesktopItem({ item, pathname, transparent }: { item: NavItem; pathname: string; transparent: boolean }) {
  const active = isActive(pathname, item)
  const hasPanel = !!item.children?.length

  const triggerClass = cn(
    'flex items-center gap-1 whitespace-nowrap rounded-sm px-3 py-2 text-sm font-medium transition-colors',
    transparent ? 'hover:bg-ink-foreground/10' : 'hover:bg-secondary',
    active && !transparent && 'text-primary',
  )

  if (!hasPanel) {
    return (
      <li>
        <Link href={item.href!} className={triggerClass}>
          {item.label}
        </Link>
      </li>
    )
  }

  return (
    <li className={cn('group', item.mega ? 'static' : 'relative')}>
      {item.href ? (
        <Link href={item.href} className={triggerClass} aria-haspopup="true">
          {item.label}
          <ChevronDown className="size-3.5 opacity-70 transition-transform group-hover:rotate-180" aria-hidden />
        </Link>
      ) : (
        <button type="button" className={triggerClass} aria-haspopup="true">
          {item.label}
          <ChevronDown className="size-3.5 opacity-70 transition-transform group-hover:rotate-180" aria-hidden />
        </button>
      )}

      {/* Panel */}
      <div
        className={cn(
          'invisible absolute top-full z-50 pt-3 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100',
          item.mega
            ? 'left-1/2 w-[min(46rem,calc(100vw-2rem))] -translate-x-1/2'
            : 'right-0 w-72',
        )}
      >
        {item.mega ? <MegaPanel item={item} /> : <SimplePanel item={item} />}
      </div>
    </li>
  )
}

function MegaPanel({ item }: { item: NavItem }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-xl">
      <div className="flex items-center justify-between gap-4 border-b border-border bg-secondary/50 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
        <Link href="/book-a-consultation" className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
          Free site visit &amp; quote <ArrowRight className="size-3" aria-hidden />
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-1 p-3 md:grid-cols-3">
        {item.children!.map((child) => (
          <li key={child.href}>
            <NavCard child={child} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function SimplePanel({ item }: { item: NavItem }) {
  return (
    <div className="rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-xl">
      <ul className="flex flex-col">
        {item.children!.map((child) => (
          <li key={child.href}>
            <NavCard child={child} compact />
          </li>
        ))}
      </ul>
    </div>
  )
}

function NavCard({ child, compact = false }: { child: NavLink; compact?: boolean }) {
  const Icon = child.icon ? icons[child.icon] : undefined
  return (
    <Link
      href={child.href}
      className={cn('group/card flex gap-3 rounded-lg p-3 transition-colors hover:bg-secondary', compact && 'items-center')}
    >
      {Icon && (
        <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground transition-colors group-hover/card:bg-primary group-hover/card:text-primary-foreground">
          <Icon className="size-5" aria-hidden />
        </span>
      )}
      <span className="min-w-0">
        <span className="block text-sm font-semibold">{child.label}</span>
        {!compact && <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{child.description}</span>}
        {compact && <span className="block text-xs leading-relaxed text-muted-foreground">{child.description}</span>}
      </span>
    </Link>
  )
}

/* ----------------------------- mobile ----------------------------- */

function MobileDrawer({ pathname }: { pathname: string }) {
  return (
    <nav
      id="mobile-nav"
      aria-label="Mobile"
      className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background text-foreground lg:hidden"
    >
      <ul className="mx-auto flex max-w-[90rem] flex-col px-5 py-3">
        {mainNav.map((item) => {
          const active = item.href ? pathname === item.href : false
          if (!item.children?.length) {
            return (
              <li key={item.label} className="border-b border-border">
                <Link href={item.href!} className={cn('block py-3.5 font-display text-lg font-semibold', active && 'text-primary')}>
                  {item.label}
                </Link>
              </li>
            )
          }
          return (
            <li key={item.label} className="border-b border-border">
              <details className="group" open={isActive(pathname, item)}>
                <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 font-display text-lg font-semibold">
                  {item.label}
                  <ChevronDown className="size-5 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <ul className="flex flex-col gap-1 pb-3">
                  {item.children.map((child) => {
                    const Icon = child.icon ? icons[child.icon] : undefined
                    return (
                      <li key={child.href}>
                        <Link href={child.href} className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-secondary">
                          {Icon && (
                            <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                              <Icon className="size-4" aria-hidden />
                            </span>
                          )}
                          <span>
                            <span className="block text-sm font-semibold">{child.label}</span>
                            <span className="block text-xs leading-relaxed text-muted-foreground">{child.description}</span>
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </details>
            </li>
          )
        })}
      </ul>

      <div className="mx-auto flex max-w-[90rem] flex-col gap-3 px-5 pb-6 pt-2">
        <Link
          href={CTA_HREF}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3.5 font-semibold text-primary-foreground"
        >
          {CTA_LABEL} <ArrowRight className="size-4" aria-hidden />
        </Link>
        <a href={contact.phones[0].href} className="inline-flex items-center justify-center gap-2 rounded-sm border border-border py-3 font-semibold text-primary">
          <Phone className="size-4" aria-hidden />
          {`Call ${contact.phones[0].name} · ${contact.phones[0].display}`}
        </a>
      </div>
    </nav>
  )
}
