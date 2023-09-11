import { SignUp } from "@clerk/nextjs"
import { Flex } from "@radix-ui/themes"

const SignUpPage = () => {
  return (
    <Flex justify="center">
      <SignUp />
    </Flex>
  )
}

export default SignUpPage