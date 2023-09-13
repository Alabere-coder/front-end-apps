import { Button, Heading, Flex, Text, Container } from '@radix-ui/themes'
import { auth } from '@clerk/nextjs'
import ParticleBackground from './components/ParticleBackground'

export default function Home() {

  const userId = auth()

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <Container>
        <ParticleBackground />
        <Heading size="9" weight="bold" align="center">All-in-one Solution to</Heading>
        <Heading size="9" weight="bold" align="center">Kickstart your UI in a Click</Heading>
        <div className=' my-8'>
          <Text size="5" weight="medium">
            UI-Design is a comprehensive design kit made with Radix-ui Theme. For building and developing web applications.
          </Text>
        </div>
        <Flex gap="4" mt="6" justify="center">
          <Button size="3" color='gray' className='bg-black'>Purchase</Button>
          <Button size="3" variant='outline'>View Demo</Button>
        </Flex>
      </Container>
    </main>
  )
}
