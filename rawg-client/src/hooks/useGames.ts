import useData from "./useData";
import { Genre } from '../hooks/useGenres'
import { Platform } from '../hooks/usePlatforms'
import { Store } from '../hooks/useStores'

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  selectedStore: Store | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.slug,
        parent_platforms: selectedPlatform?.id,
        stores: selectedStore?.id,
      },
    },
    [selectedGenre, selectedPlatform, selectedStore]
  );
export default useGames;