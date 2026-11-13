'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { contact } from '@/content/company'
import { mainNav, type NavItem } from '@/content/navigation'
import { Wordmark } from '@/components/wordmark'

const CTA_HREF = '/book-a-consultation'
const CTA_LABEL = 'Free site visit & quote'

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

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const transparent = overHero && !scrolled && !open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        transparent ? 'bg-transparent text-ink-foreground' : 'border-b border-border bg-background/95 text-foreground backdrop-blur',
      )}
    >
      <div className="mx-auto flex h-18 max-w-[90rem] items-center justify-between gap-4 px-5 lg:px-8">
        <Link href="/" aria-label="Elko Projects home" className="shrink-0">
          <Wordmark inverted={transparent} className="h-11" />
        </Link>

        <nav aria-label="Main" className="hidden min-[1440px]:block">
          <ul className="flex items-center">
            {mainNav.map((item) => (
              <DesktopNavItem key={item.href + item.label} item={item} pathname={pathname} transparent={transparent} />
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
            className={cn(
              'flex items-center gap-1.5 rounded-sm p-2 min-[1440px]:hidden',
              transparent ? 'hover:bg-ink-foreground/10' : 'hover:bg-secondary',
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
            <span className="hidden text-sm font-semibold min-[1024px]:inline">Menu</span>
          </button>
        </div>
      </div>

      {open && <MobileNav pathname={pathname} />}
    </header>
  )
}

function DesktopNavItem({ item, pathname, transparent }: { item: NavItem; pathname: string; transparent: boolean }) {
  const active = pathname === item.href || pathname.startsWith(item.href + '/')
  const hasChildren = !!item.children?.length

  return (
    <li className="group relative">
      <Link
        href={item.href}
        className={cn(
          'flex items-center gap-1 whitespace-nowrap rounded-sm px-2.5 py-2 text-[13px] font-medium transition-colors',
          transparent ? 'hover:bg-ink-foreground/10' : 'hover:bg-secondary',
          active && !transparent && 'text-primary',
        )}
      >
        {item.label}
        {hasChildren && <ChevronDown className="size-3.5 opacity-70" aria-hidden />}
      </Link>

      <div className="invisible absolute right-0 top-full pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div
          className={cn(
            'rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-lg',
            hasChildren ? 'w-80' : 'w-72',
          )}
        >
          <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
          {hasChildren ? (
            <ul className="mt-3 flex flex-col gap-1 border-t border-border pt-3">
              {item.children!.map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className="block rounded-sm px-3 py-2 hover:bg-secondary">
                    <span className="block text-sm font-medium">{child.label}</span>
                    <span className="block text-xs leading-relaxed text-muted-foreground">{child.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <Link
              href={item.href}
              className="mt-3 inline-flex items-center gap-1.5 border-t border-border pt-3 text-sm font-semibold text-primary"
            >
              {`View ${item.label}`} <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          )}
        </div>
      </div>
    </li>
  )
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <nav
      id="mobile-nav"
      aria-label="Mobile"
      className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background text-foreground min-[1440px]:border-t"
    >
      <ul className="mx-auto flex max-w-[90rem] flex-col px-5 py-4 lg:px-8">
        {mainNav.map((item) => {
          const active = pathname === item.href
          return (
            <li key={item.href + item.label} className="border-b border-border last:border-0">
              <Link href={item.href} className={cn('block pt-3 font-display text-lg font-semibold', active && 'text-primary')}>
                {item.label}
              </Link>
              <p className="pb-1 text-sm text-muted-foreground">{item.description}</p>
              {item.children?.length ? (
                <ul className="flex flex-col pb-3 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="block py-1.5 text-sm text-muted-foreground hover:text-primary">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="pb-3" />
              )}
            </li>
          )
        })}
        <li className="flex flex-col gap-3 pt-4">
          <Link
            href={CTA_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 font-semibold text-primary-foreground"
          >
            {CTA_LABEL} <ArrowRight className="size-4" aria-hidden />
          </Link>
          <a href={contact.phones[0].href} className="flex items-center gap-2 font-semibold text-primary">
            <Phone className="size-4" aria-hidden />
            {`Call ${contact.phones[0].name} · ${contact.phones[0].display}`}
          </a>
        </li>
      </ul>
    </nav>
  )
}
