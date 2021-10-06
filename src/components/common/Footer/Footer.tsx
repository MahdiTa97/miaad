// import { Github, Vercel } from '@components/icons'
import { Container, Logo } from '@components/ui'
import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
// import { I18nWidget } from '@components/common'
import s from './Footer.module.css'

interface Props {
  className?: string
  children?: any
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]

const Footer: FC<Props> = ({ className }) => {
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 transition-colors duration-150 border-b lg:grid-cols-12 border-accent-2 text-primary bg-primary">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/">
              <a className="flex items-center flex-initial font-bold md:mr-24">
                <span className="mr-2 border rounded-full border-accent-6">
                  <Logo />
                </span>
                <span>ACME</span>
              </a>
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-8">
            <div className="grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col">
              {/* {[...links, ...sitePages].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="transition duration-150 ease-in-out text-accent-9 hover:text-accent-6">
                      {page.name}
                    </a>
                  </Link>
                </span>
              ))} */}
            </div>
          </div>
          <div className="flex items-start col-span-1 lg:col-span-2 lg:justify-end text-primary">
            <div className="flex items-center h-10 space-x-6">
              <a
                className={s.link}
                aria-label="Github Repository"
                href="https://github.com/vercel/commerce"
              >
                {/* <Github /> */}
              </a>
              {/* <I18nWidget /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-6 pb-10 space-y-4 text-sm md:flex-row text-accent-6">
          <div>
            <span>&copy; 2020 ACME, Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center text-sm text-primary">
            <span className="text-primary">Created by</span>
            <a
              rel="noopener noreferrer"
              href="https://vercel.com"
              aria-label="Vercel.com Link"
              target="_blank"
              className="text-primary"
            >
              {/* <Vercel
                className="inline-block h-6 ml-3 text-primary"
                alt="Vercel.com Logo"
              /> */}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
