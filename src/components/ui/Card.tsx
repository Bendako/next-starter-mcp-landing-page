import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  shadow?: 'sm' | 'md' | 'lg' | 'xl'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, shadow = 'md', ...props }, ref) => {
    const shadows = {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl'
    }

    return (
      <div
        className={cn(
          'rounded-lg border border-slate-200 bg-white p-6',
          shadows[shadow],
          hover && 'transition-all duration-200 hover:shadow-xl hover:-translate-y-1',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

export { Card } 