"use client"

import { clsx } from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { navItems } from "@/app/lib/constsnts"

export function FooterLinks() {
  const pathname = usePathname()

  return (
    <div className="flex gap-4 items-center">
      {navItems.map(({ href, label }) => (
        <Link color="gray" href={href} key={href}>
          <span
            className={clsx(
              "hover:text-primary transition text-muted-foreground",
              href === pathname ? "text-primary" : "",
            )}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  )
}
