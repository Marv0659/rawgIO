import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {


  return (
    <Grid
  templateAreas={{base:`"header" "main"`,
                  lg:`"header header" "aside main"`}}
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    <NavBar />
  </GridItem>
  <Show above="lg">
    <GridItem pl='2' bg='pink.300' area={'aside'}>
      Aside
    </GridItem>
  </Show>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
</Grid>
  )
}

export default App
