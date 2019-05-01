import { FeaturedGameInfo } from "./featured-game-info";

export interface FeaturedGames {
    /**
     *  The suggested interval to wait before requesting FeaturedGames again 
     */
    clientRefreshInterval: number;

    /**
     * The list of featured games 
     */
    gameList: FeaturedGameInfo[];
}