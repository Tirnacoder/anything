import Link from "next/link"

interface CategoryPillProps {
  name: string
  href: string
}

export default function CategoryPill({ name, href }: CategoryPillProps) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
    >
      {name}
    </Link>
  )
}
