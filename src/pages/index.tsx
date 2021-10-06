import { Layout } from '@components/common'
import { Container } from '@components/ui'

export default function Home() {
  return (
    <Container className="max-w-xl px-3 space-y-10 sm:px-0 xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl">
      <div className="w-full h-screen mx-auto bg-secondary rounded-3xl"></div>
      <div className="w-full h-screen bg-gray-600 rounded-3xl"></div>
    </Container>
  )
}

Home.Layout = Layout
