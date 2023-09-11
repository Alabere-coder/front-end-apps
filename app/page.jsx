import { Button, Heading, Flex } from '@radix-ui/themes'
import { auth } from '@clerk/nextjs'

export default function Home() {

  const userId = auth()

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <Heading size="9" weight="bold" align="center">All-in-one Solution to</Heading>
      <Heading size="9" weight="bold" align="center">Kickstart your UI in a Click</Heading>
      <Flex gap="4" mt="6">
        <Button size="3" color='gray' className='bg-black'>Purchase</Button>
        <Button size="3" variant='outline'>View Demo</Button>
      </Flex>
    </main>
  )
}
