import Link from "next/link"
import { clsx } from "clsx"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={clsx("flex items-center gap-2", className)}>
      <span className="text-xl font-bold text-primary">KatoCheck</span>
    </Link>
  )
}
