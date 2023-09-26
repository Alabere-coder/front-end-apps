import { Button, Heading, Flex, Text, Container, Link, Card } from '@radix-ui/themes'
import { SignInButton, auth } from '@clerk/nextjs'
import ParticleBackground from './components/ParticleBackground'


export default function Home() {

  const {userId} = auth()

  return (
    <main className="flex min-h-screen flex-col items-center p-16 gap-4">
      <Container>
        <Flex justify="center" mb="6">
          {
            !userId && (
              <div>
                <Text size="6">Please <SignInButton /> to see the Dashboard</Text>
                
              </div>
            )
          }
          {
            userId && (
              <Card variant='surface' color='gray'>
                <Link weight="bold" color='gray' href='/dashboard'>
                Dashboard
              </Link>
              </Card>
            )
          }
        </Flex>
        {/* <ParticleBackground /> */}
        <Heading size="9" weight="bold" align="center">All-in-one Solution to</Heading>
        <Heading size="9" weight="bold" align="center">Kickstart your UI in a Click</Heading>
        <Flex align="center" justify="center" className=' my-8'>
          <Text size="5" weight="medium" mx="auto" className='text-center w-[60%]'>
            UI-Design is a comprehensive design kit made with Radix-ui Theme. For building and developing web applications.
          </Text>
        </Flex>
        <Flex gap="4" mt="6" justify="center">
          <Button size="3" color='gray' className='bg-black'>Purchase</Button>
          <Button size="3" variant='outline'>View Demo</Button>
        </Flex>
      </Container>
    </main>
  )
}
