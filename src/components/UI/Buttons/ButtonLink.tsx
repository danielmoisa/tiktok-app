import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import Link from 'next/link'

interface ButtonProps {
  className?: string
  href: string
  children: ReactNode
}

const ButtonLink = (props: ButtonProps) => {
  const { className, children, href, ...rest } = props
  return (
    <Link
      href={href}
      className={
        'flex items-center justify-center gap-2 p-1 text-xs text-center text-white font-bold rounded border border-zinc-200 sm:p-3 sm:text-base sm:px-4 bg-[#EF2950]'
      }
      {...rest}
    >
      {children}
    </Link>
  )
}

export default ButtonLink
