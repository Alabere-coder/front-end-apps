import { Flex, Link } from '@radix-ui/themes'
import { UserButton, auth } from '@clerk/nextjs'
import About from './About'
import Contact from './Contact'

const Navbar = () => {

  const { userId } = auth()


  return (
    <div className='bg-white z-[100] sticky top-0 left-0 right-0 border-b-2 py-4 px-6 flex items-center justify-between mb-5'>
        <div className='ml-8'>
            <Link size="6" href='/' className='text-black'>
                Ui-Design
            </Link>
        </div>
        <Flex className='flex gap-4 text-black font-bold'>
            <About />
            <Contact />
        </Flex>
        
        <Flex gap="4" mr="6">
          {
            !userId && (
              <Flex gap="2">
                <Link href='/sign-in' className='w-24 bg-black rounded-lg border-2 border-solid border-gray-700 text-center text-white'>Sign-in</Link>
                <Link href='/sign-up' className='w-24 bg-black rounded-lg border-2 border-solid border-gray-700 text-center text-white'>Register</Link>
              </Flex>
            )
          }
          <UserButton afterSignOutUrl='/'/>
        </Flex>
    </div>
  )
}

export default Navbar
