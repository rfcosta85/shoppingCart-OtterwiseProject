import CartContent from '../../components/CartContent/CardContext'
import { useState, useEffect } from 'react'
import { getItem, setItem, sortByID } from '../../helpers/data.js'
import Header from '../../components/Header'
import { Flex, Button, useToast, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const fruitList = getItem()
  const [fruits, setFruits] = useState([])
  const [cart, setCart] = useState([])
  const [totalCart, setTotalCart] = useState(0)
  const toast = useToast()
  useEffect(() => {
    setFruits(fruitList)
    const cart = getItem()
    let total = 0
    cart.forEach((fruit) => {
      total = total + fruit.total
    })
    setTotalCart(total)
  }, [cart])

  const handleClick = (fruit) => {
    const cart = getItem()
    const newCart = cart.filter((item) => item.id !== fruit.id)
    newCart.push(fruit)
    sortByID(newCart)
    setCart(newCart)
    setItem(newCart)
  }

  const handleRemoveClick = (fruit) => {
    const cart = getItem()
    const newCart = cart.filter((item) => item.id !== fruit.id)
    sortByID(newCart)
    setCart(newCart)
    setItem(newCart)
  }

  return (
    <section>
      <Header>
        <Flex align="center" justify="space-between">
          <Text
            borderRadius="50px"
            width="180px"
            height="110px"
            padding="10px"
            backgroundColor="green.600"
            fontFamily="cursive"
            textAlign="center"
            fontSize="24px"
            boxShadow="dark-lg"
            cursor="pointer"
          >
            <Link to="/">
              Fair Hortifruti
              <Text
                fontFamily="cursive"
                fontSize="12px"
                textAlign="center"
                paddingTop="5px"
                textShadow="dark-lg"
              >
                A sua melhor escolha
              </Text>
            </Link>
          </Text>
          <Text>Carrinho de Compra</Text>
        </Flex>
      </Header>
      <Text textAlign="center" mt="30px" fontSize="30px" fontWeight="600">
        Resumo da compra
      </Text>
      <Flex alignItems="center" direction="column" mt="100px">
        {fruits?.map((fruit) => (
          <CartContent
            key={fruit.id}
            id={fruit.id}
            name={fruit.name}
            img={fruit.img}
            amount={fruit.amount}
            total={fruit.total}
            unit={fruit.unit}
            price={fruit.price}
            handleClick={handleClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
        <Text mt="25px" fontSize="24px" fontWeight="500">
          Total da compra:{' '}
          {Number(totalCart.toFixed(2)).toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
            minimumFractionDigits: 2,
          })}
        </Text>
        <Flex justify="center" mt="50px">
          <Link to="/">
            <Button
              mr="100px"
              w="200px"
              h="50px"
              mt="5px"
              ml="30px"
              size="lg"
              colorScheme="blue"
            >
              Continue comprando
            </Button>
          </Link>
          <Button
            w="150px"
            h="50px"
            mt="5px"
            ml="30px"
            size="lg"
            colorScheme="blue"
            onClick={() =>
              toast({
                title: 'Compra finalizada!',
                description: 'Compra finalizada com sucesso!',
                status: 'success',
                duration: 1500,
                isClosable: true,
              })
            }
          >
            Finalizar compra
          </Button>
        </Flex>
      </Flex>
    </section>
  )
}

export default Cart
