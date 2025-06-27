"use client"

import Link from "next/link"
import { PropsWithChildren } from "react"
import { usePathname } from "next/navigation"
import { clsx } from "clsx"

type Props = {
  href: string
  onClick?: () => void
  className?: string
}

export function NavLink({ href, className, children }: PropsWithChildren<Props>) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx("hover:text-primary transition", className, isActive ? "text-primary" : "")}
    >
      {children}
    </Link>
  )
}
