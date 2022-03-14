import {
  Box,
  Container,
  Flex,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FruitImg, Div } from './cardContextStyles'

const Cart = (props) => {
  const { img, name, id, amount, unit, handleClick, handleRemoveClick, price } =
    props
  const [cartAmount, setCartAmount] = useState(amount)
  const handleChange = (value) => setCartAmount(value)
  const toast = useToast()

  return (
    <section>
      <Div>
        <Box
          mt="2px"
          width="100%"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Container maxW="container.xl">
            <Flex
              wrap="wrap"
              direction="row"
              justify="space-between"
              align="center"
            >
              <FruitImg>
                <img src={img} alt={name} />
              </FruitImg>
              <Text fontSize="xl" fontWeight="600">
                {name}
              </Text>
              <Text fontSize="xl" fontWeight="600">
                total:
                {Number((cartAmount * price).toFixed(2)).toLocaleString(
                  'pt-BR',
                  {
                    currency: 'BRL',
                    style: 'currency',
                    minimumFractionDigits: 2,
                  }
                )}
              </Text>

              <NumberInput
                onChange={handleChange}
                value={cartAmount}
                size="md"
                maxW="10%"
                step={unit === 'KG' ? 0.1 : 1}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                onClick={() => {
                  handleClick({
                    id,
                    name,
                    img,
                    amount: cartAmount,
                    total: cartAmount * price,
                    unit,
                    price,
                  })
                  toast({
                    title: `Item atualizado`,
                    description: `${name} atualizado com sucesso`,
                    status: 'success',
                    duration: 2000,
                  })
                }}
                mt="5px"
                ml="30px"
                colorScheme="blue"
                isDisabled={cartAmount > 0 ? false : true}
              >
                Atualizar
              </Button>
              <Button
                onClick={() => {
                  handleRemoveClick({
                    id,
                  })
                  toast({
                    title: `Item removido`,
                    description: `${name} Item removido com sucesso`,
                    status: 'warning',
                    duration: 2000,
                  })
                }}
                colorScheme="red"
                size="md"
              >
                Remover
              </Button>
            </Flex>
          </Container>
        </Box>
      </Div>
    </section>
  )
}

export default Cart
