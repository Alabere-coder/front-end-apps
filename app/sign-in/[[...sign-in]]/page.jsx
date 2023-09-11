import { SignIn } from "@clerk/nextjs"
import { Flex } from "@radix-ui/themes"

const SignInPage = () => {
  return (
    <Flex justify="center">
      <div>
        <SignIn />
      </div>
    </Flex>
  )
}

export default SignInPage
