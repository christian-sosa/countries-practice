import React, { useState } from "react"
import {
  Stack,
  Input,
  IconButton,
  Heading,
  ChakraProvider,
  Container,
} from "@chakra-ui/react"
import countriesService from "../services/countries"

const Navbar = ({ setIndividual, countries }) => {
  const [search, setSearch] = useState([])
  const [placeholder, setPlaceholder] = useState("Busqueda por nombre")

  const OnChangeInputNav = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      countriesService.get1(search).then((initial) => {
        initial.status
          ? setPlaceholder("Pais incorrecto")
          : setIndividual(initial)
      })
    } catch {
      e
    }
  }

  return (
    <Stack
      direction="row"
      spacing="60"
      padding={4}
      border="1px"
      borderColor="black"
    >
      <Stack paddingLeft={2}>
        <Heading size="2xl">ONU</Heading>
      </Stack>
      <Container centerContent maxW="container.xl">
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Stack direction="row" spacing="0" width="100%">
            <Input
              roundedBottomRight={0}
              placeholder={placeholder}
              backgroundColor="white"
              onChange={OnChangeInputNav}
            ></Input>
            <IconButton
              type="submit"
              roundedBottomLeft={0}
              aria-label="Search database"
              icon={
                <img
                  src="https://icongr.am/octicons/search.svg?size=20&color=currentColor"
                  alt=""
                ></img>
              }
            />
          </Stack>
        </form>
      </Container>
    </Stack>
  )
}

export default Navbar
