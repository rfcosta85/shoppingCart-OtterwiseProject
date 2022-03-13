import { Heading } from '@chakra-ui/react'

const Header = (props) => {
  const { children } = props
  return (
    <div>
      <Heading
        maxW="100%"
        padding="20px"
        backgroundColor="red.600"
        textColor="white"
      >
        {children}
      </Heading>
    </div>
  )
}

export default Header
