import { Layout } from '@components/common'
import { DotsSquare, Flash } from '@components/icons'
import { Card, Container, HyperLink } from '@components/ui'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const title = 'miaad'

export const Header = () => (
  <Card className="flex flex-col px-4 py-3 mb-16 text-center md:mt-4 md:py-16 md:px-24 sm:mb-0">
    <HyperLink
      href="/"
      className="mx-auto mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-primary"
    >
      <Flash className="w-10 h-10" />
    </HyperLink>
    <div className="mb-10 text-center md:mb-12">
      <h2 className="mb-6 text-base text-3xl font-bold leading-none tracking-tight sm:text-4xl">
        <span className="relative inline-block text-center">
          <div className="text-bg-primary">
            <DotsSquare className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block" />
          </div>
          <span className="relative">Get</span>
        </span>{' '}
        where you're going faster with{' '}
        <span className="capitalize">{title}</span>
      </h2>
      <p className="text-primary md:text-lg">
        Expand your skills in development, testing, analysis, and designing
      </p>
    </div>
    <div>
      <HyperLink
        href="/"
        className="inline-flex items-center justify-center h-12 px-6 font-semibold transition duration-200 rounded shadow-md bg-base text-secondary"
      >
        Get started
      </HyperLink>
    </div>
  </Card>
)

export default function Home() {
  return (
    <Container className="space-y-10">
      <Header />
    </Container>
  )
}

Home.Layout = Layout

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer'])),
  },
})
