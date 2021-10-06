// import { Github, Vercel } from '@components/icons'
import { Container, Logo } from '@components/ui'
import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
// import { I18nWidget } from '@components/common'
import s from './Footer.module.css'

interface Link {
  href: string
  label: string
}
interface Props {
  className?: string
  children?: any
  links?: Link[]
}

const Footer: FC<Props> = ({ className, links }) => {
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 transition-colors duration-150 border-b lg:grid-cols-12 border-accent-2 text-primary bg-secondary">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/">
              <a className="flex items-center flex-initial font-bold md:mr-24">
                TEST
              </a>
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-8">
            <div className="grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col">
              {links?.map((l) => (
                <span key={l.label} className="py-3 md:py-0 md:pb-4">
                  <Link href={l.href!}>
                    <a className="transition duration-150 ease-in-out text-primary hover:text-accent-6">
                      {l.label}
                    </a>
                  </Link>
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-start col-span-1 lg:col-span-2 lg:justify-end text-primary">
            <div className="flex items-center h-10 space-x-6">
              {/* <I18nWidget /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-6 pb-10 space-y-4 text-sm md:flex-row text-accent-6">
          <div>
            <span>&copy;Copyright 2021 All Rights Reserved for Miaad</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
