'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { contact, mainNav } from '@/lib/site-data'
import { Wordmark } from '@/components/wordmark'

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
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link href="/" aria-label="Elko Projects home" className="shrink-0">
          <Wordmark inverted={transparent} />
        </Link>

        <nav aria-label="Main" className="hidden min-[1320px]:block">
          <ul className="flex items-center">
            {mainNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 whitespace-nowrap rounded-sm px-2 py-2 text-sm font-medium transition-colors',
                      transparent ? 'hover:bg-ink-foreground/10' : 'hover:bg-secondary',
                      active && !transparent && 'text-primary',
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="size-3.5 opacity-70" aria-hidden />}
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                      <ul className="flex w-72 flex-col rounded-md border border-border bg-popover p-2 text-popover-foreground shadow-lg">
                        {item.children.map((child) => (
                          <li key={child.slug}>
                            <Link
                              href={`${item.href}/${child.slug}`}
                              className="block rounded-sm px-3 py-2 text-sm hover:bg-secondary"
                            >
                              <span className="block font-medium">{child.title}</span>
                              <span className="block text-xs leading-relaxed text-muted-foreground">{child.summary}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/book-a-consultation"
            className="whitespace-nowrap rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            className="rounded-sm p-2 min-[1320px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background min-[1320px]:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {mainNav.map((item) => (
              <li key={item.href} className="border-b border-border last:border-0">
                <Link href={item.href} className="block py-3 font-display text-lg font-semibold">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="flex flex-col pb-3 pl-4">
                    {item.children.map((child) => (
                      <li key={child.slug}>
                        <Link href={`${item.href}/${child.slug}`} className="block py-1.5 text-sm text-muted-foreground">
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-4">
              <a href={contact.phones[0].href} className="flex items-center gap-2 font-semibold text-primary">
                <Phone className="size-4" aria-hidden />
                {`Call Elias · ${contact.phones[0].display}`}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
