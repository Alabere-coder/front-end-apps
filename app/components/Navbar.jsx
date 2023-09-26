import { Box, Flex, Link } from '@radix-ui/themes'
import { UserButton, auth } from '@clerk/nextjs'
import About from './About'
import Contact from './Contact'

const Navbar = () => {

  const { userId } = auth()


  return (
    <Flex className='bg-white z-[100] sticky top-0 left-0 right-0 border-b py-4 px-6 flex items-center justify-between mb-5'>
        <Box className='ml-8'>
            <Link size="6" color='gray' href='/' className=''>
                Ui-Design
            </Link>
        </Box>
        <Flex className='flex gap-4 text-black font-bold'>
            <About />
            <Contact />
        </Flex>
        
        <Flex gap="4" mr="6">
          {
            !userId && (
              <Flex gap="2">
                <Link href='/sign-in' className='w-24 font-bold bg-zinc-400 hover:bg-white hover:text-gray-400 rounded-lg border-2 border-solid border-gray-400 text-center text-white'>Sign-in</Link>
                <Link href='/sign-up' className='w-24 font-bold bg-white hover:bg-zinc-400 hover:text-white text-gray-400 rounded-lg border-2 border-solid border-gray-400 text-center'>Register</Link>
              </Flex>
            )
          }
          <UserButton afterSignOutUrl='/'/>
        </Flex>
    </Flex>
  )
}

export default Navbar
