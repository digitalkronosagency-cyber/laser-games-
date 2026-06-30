'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  loading?: boolean
  external?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, loading, external, children, disabled, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg'

    const variants = {
      primary: 'bg-primary text-white hover:bg-red-700 active:scale-95',
      secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-bg active:scale-95',
      ghost: 'bg-transparent text-white hover:bg-white/10 active:scale-95',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const classes = cn(base, variants[variant], sizes[size], className)

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
        {loading && (
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
