import { Searchbar, UserNav } from '@components/common'
import { Container } from '@components/ui'
import Link from 'next/link'
import { FC } from 'react'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[]
}

const Navbar: FC<NavbarProps> = ({ links }) => (
  <NavbarRoot>
    <Container className="max-w-xl px-3 sm:px-0 xl:max-w-5xl lg:max-w-3xl md:max-w-1xl sm:max-w-lg">
      <div className={s.nav}>
        <div className="flex items-center flex-1">
          <Link href="/">
            <a className={s.logo} aria-label="Logo">
              Miaad
            </a>
          </Link>
          <nav className={s.navMenu}>
            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a className={s.link}>{l.label}</a>
              </Link>
            ))}
          </nav>
        </div>
        <div className="justify-center flex-1 hidden lg:flex">
          <Searchbar />
        </div>
        <div className="flex items-center justify-end flex-1 space-x-8">
          <UserNav />
        </div>
      </div>
      <div className="flex pb-4 lg:px-6 lg:hidden">
        <Searchbar id="mobile-search" />
      </div>
    </Container>
  </NavbarRoot>
)

export default Navbar
