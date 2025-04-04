import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'


interface Props{
    game: Game,
}

const GameCard = ({game}: Props) => {
  
  return (
    <Card overflow={"hidden"}>
        <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
        <CardBody>
            <Heading fontSize={"2xl"}>{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
              <PlatformIconsList platforms={game.parent_platforms.map((p) => p.platform)} />
            <CriticScore score={game.metacritic} />
            </HStack>

            
        </CardBody>

    </Card>
   
  )
}

export default GameCard
