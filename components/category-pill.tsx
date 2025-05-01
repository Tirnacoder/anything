import Link from "next/link"

interface CategoryPillProps {
  name: string
  href: string
}

export default function CategoryPill({ name, href }: CategoryPillProps) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
    >
      {name}
    </Link>
  )
}
