import { useState, useEffect } from 'react'
import fruitList from '../../services/fruitsList'
import FruitCard from '../../components/ProductsCard/ProductCardContext'
import {
  Flex,
  Text,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Container,
} from '@chakra-ui/react'
import { MdShoppingCart, MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { getItem, setItem, sortByID } from '../../helpers/data.js'

const Fruits = () => {
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    setFruits(fruitList)
  }, [])

  const handleClick = (fruit) => {
    const cart = getItem()
    const newCart = cart.filter((item) => item.id !== fruit.id)
    newCart.push(fruit)
    sortByID(newCart)
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
          </Text>
          <Flex align="center" w="50%">
            <InputGroup size="lg" backgroundColor="white" cursor="pointer">
              <Input color="gray.900" placeholder="Realize a sua busca" />
              <InputRightElement width="4.5rem"></InputRightElement>
              <IconButton
                icon={<MdSearch />}
                colorScheme="green"
                w="50px"
                h="50px"
                borderRadius="0px"
              />
            </InputGroup>
          </Flex>
          <Flex>
            <Link to="/cart">
              <IconButton
                icon={<MdShoppingCart />}
                colorScheme="green"
                w="60px"
                h="60px"
                size="1px"
                padding="10px"
                borderRadius="20px"
              />
            </Link>
          </Flex>
        </Flex>
      </Header>
      <Text textAlign="center" mt="30px" fontSize="30px" fontWeight="600">
        Lista de produtos
      </Text>
      <Container
        display="flex"
        flexDir="row"
        wrap="wrap"
        maxWidth="90%"
        maxHeight="90%"
        backgroundColor="gray.50"
        mt="50px"
        padding="40px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex justify={'space-evenly'} wrap={'wrap'} gap="10px">
          {fruits?.map((fruit) => (
            <FruitCard
              key={fruit.id}
              id={fruit.id}
              name={fruit.name}
              price={fruit.price}
              unit={fruit.unit}
              img={fruit.img}
              handleClick={handleClick}
            />
          ))}
        </Flex>
      </Container>
    </section>
  )
}

export default Fruits
