import React, { useState, useEffect } from "react"
import {
  ChakraProvider,
  Container,
  Stack,
  Grid,
  Box,
  Text,
  Button,
  CircularProgress,
} from "@chakra-ui/react"
import "./App.css"
import countriesService from "./services/countries"
import List from "./components/list"
import NavBar from "./components/navbar"

function App() {
  const [countries, setCountries] = useState()
  const [isLoading, setisLoading] = useState(false)
  const [individual, setIndividual] = useState()

  useEffect(() => {
    countriesService.getAll().then((initial2) => {
      setCountries(initial2)
    })
    setTimeout(() => {
      setisLoading(true)
    }, 1500)
  }, [])

  const handleClick = () => {
    const aux = countries.reverse()
    setCountries(() => aux)
    setTimeout(() => {
      setisLoading(true)
    }, 1000)
    setisLoading(false)
  }
  const handleClick2 = () => {
    const aux = countries.sort(function (a, b) {
      if (a.population > b.population) {
        return -1
      }
      if (a.population < b.population) {
        return 1
      }
      return 0
    })
    setCountries(aux)
    setTimeout(() => {
      setisLoading(true)
    }, 1000)
    setisLoading(false)
  }

  const handleClick3 = () => {
    const aux = countries.sort(function (a, b) {
      if (a.area > b.area) {
        return -1
      }
      if (a.area < b.area) {
        return 1
      }
      return 0
    })
    setCountries(aux)
    setTimeout(() => {
      setisLoading(true)
    }, 1000)
    setisLoading(false)
  }
  return (
    <ChakraProvider>
      <NavBar setIndividual={setIndividual} countries={countries}></NavBar>
      <Container maxW="container.xl" paddingTop="1">
        <Button paddingTop="1" onClick={handleClick}>
          Ordenar alfabeticamente
        </Button>
        <Button paddingTop="1" marginLeft="2" onClick={handleClick2}>
          Ordenar por poblacion
        </Button>
        <Button paddingTop="1" marginLeft="2" onClick={handleClick3}>
          Ordenar por area
        </Button>
      </Container>
      <Container maxW="container.xl">
        {individual && (
          <Box>
            <Text>Filter</Text>
            <List
              countrie={individual[0]}
              setisLoading={setisLoading}
              countries={countries}
              setCountries={setCountries}
              setIndividual={setIndividual}
            ></List>
          </Box>
        )}
        {!isLoading ? (
          <Stack margin="250px" justifyContent="center" alignItems="center">
            <CircularProgress
              isIndeterminate
              value={59}
              size="100px"
              thickness="4px"
            />
          </Stack>
        ) : (
          <Stack>
            <Container maxW="container.xl">
              <Grid
                templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
                gap={2}
              >
                {countries &&
                  countries.map((countrie, id) => (
                    <List
                      key={id}
                      countrie={countrie}
                      setisLoading={setisLoading}
                      countries={countries}
                      setCountries={setCountries}
                      setIndividual={setIndividual}
                    ></List>
                  ))}
              </Grid>
            </Container>
          </Stack>
        )}
      </Container>
    </ChakraProvider>
  )
}

export default App
