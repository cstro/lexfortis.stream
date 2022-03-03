import Link from "next/link"
import { ReactNode } from "react"

type LayoutProps = {
  children: ReactNode
}

type NavItemProps = {
  href: string
  children: ReactNode
}

function NavItem (props: NavItemProps) {
  return (
    <Link passHref href={props.href}>
      <a className="font-display inline-block text-2xl border-4 border-black">
        <div className="text-white bg-black w-32 text-center py-3 border-2 border-white hover:border-black transition-all">{props.children}</div>
      </a>
    </Link>
  )
}

function Layout (props: LayoutProps) {
  return (
    <div className="p-4">
      <header>
        <div className="text-center my-8">
          <h1 className="font-display text-9xl border-8 border-black leading-none px-8 pt-6 pb-4 inline-block">Lex Fortis</h1>
        </div>
        <nav className="mb-8">
          <ul className="flex space-x-6 justify-center m-auto">
            <li><NavItem href="/">Home</NavItem></li>
            <li><NavItem href="/about">About</NavItem></li>
            <li><NavItem href="/game-show">Game Show</NavItem></li>
          </ul>
        </nav>
      </header>
      <main className="mb-2 max-w-screen-md m-auto">{props.children}</main>
    </div>
  )
}

export default Layout
