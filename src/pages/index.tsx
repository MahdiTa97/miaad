import { Layout } from '@components/common'
import { Card, Container } from '@components/ui'

const title = 'miaad'

export const Header = () => {
  return (
    <Card className="md:mt-4">
      <div className="px-4 py-3 md:py-16 md:px-24">
        <div className="flex flex-col mb-16 text-center sm:mb-0">
          <a href="/" className="mx-auto mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary">
              <svg
                className="w-10 h-10 text-deep-purple-900"
                stroke="white"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <div className="mb-10 text-center md:mb-12">
            <h2 className="mb-6 text-base text-3xl font-bold leading-none tracking-tight sm:text-4xl">
              <span className="relative inline-block text-center">
                <div className="text-bg-primary">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </div>
                <span className="relative">Get</span>
              </span>{' '}
              where you're going faster with{' '}
              <span className="capitalize">{title}</span>
            </h2>
            <p className="text-primary md:text-lg">
              Expand your skills in development, testing, analysis, and
              designing
            </p>
          </div>
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 font-semibold transition duration-200 rounded shadow-md bg-base text-secondary"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function Home() {
  return (
    <Container>
      <div className="space-y-10">
        <Header />
        <Header />
      </div>
    </Container>
  )
}

Home.Layout = Layout
