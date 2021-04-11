import React from "react"
import { Stack, Image, Text, Button } from "@chakra-ui/react"

const List = ({
  countrie,
  countries,
  setCountries,
  setisLoading,
  setIndividual,
}) => {
  const handleButton = () => {
    const aux = countries.filter((c) => c.numericCode !== countrie.numericCode)
    setCountries(aux)
    setIndividual()
    setTimeout(() => {
      setisLoading(true)
    }, 2000)
    setisLoading(false)
  }
  return (
    <Stack
      direction="column"
      border="1px"
      borderColor="black"
      width="100%"
      marginTop={5}
    >
      <Stack justifyContent="center" alignItems="center">
        <Image loading="lazy" src={countrie.flag} boxSize="300px" />
      </Stack>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Text fontSize="3xl" color="black">
          {countrie.name}
        </Text>
        <Text fontSize="2xl" color="black">
          Capital: {countrie.capital}
        </Text>
        <Text fontSize="2xl" color="black">
          Region: {countrie.region}
        </Text>
        <Text fontSize="xl" color="black">
          Population: {countrie.population}
        </Text>
        <Text fontSize="xl" color="black">
          Area: {countrie.area} km²
        </Text>
        <Button onClick={handleButton} bg="gray.300">
          Eliminar
        </Button>
      </Stack>
    </Stack>
  )
}

export default List
