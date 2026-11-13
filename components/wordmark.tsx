import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Wordmark({
  inverted = false,
  priority = true,
  className,
}: {
  inverted?: boolean
  priority?: boolean
  className?: string
}) {
  return (
    <Image
      src={inverted ? '/images/elko-logo-light.png' : '/images/elko-logo-dark.png'}
      alt="Elko Projects"
      width={640}
      height={425}
      priority={priority}
      sizes="(max-width: 768px) 160px, 220px"
      className={cn('h-14 w-auto', inverted && 'drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]', className)}
    />
  )
}
