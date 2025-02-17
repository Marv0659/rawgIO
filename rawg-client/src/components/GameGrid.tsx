import React from 'react'
import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'






const GameGrid = () => {
    const skeletons = [...Array(20.).keys()]

    const {games, error, isLoading} = useGames()

   return(
    <>
        {error && <Text>{error}</Text>}
        
        <SimpleGrid columns={{base: 1, md: 2, lg: 3, xl:4}} spacing={4} padding={4}>
              {isLoading
          ? skeletons.map((skeleton) => <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
          </GameCardContainer>)

          : games.map((game) => <GameCardContainer>
              <GameCard key={game.id} game={game} />
          </GameCardContainer>)}
        </SimpleGrid>
    </>
   )
    
}
    






export default GameGrid
