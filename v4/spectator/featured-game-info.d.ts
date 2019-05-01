import { BannedChampion } from './banned-champion';
import { Observer } from './observer';
import { Participant } from './participant';

export interface FeaturedGameInfo {
    /**
     * The ID of the game
     */
    gameId: number;
    /**
     * The game start time represented in epoch milliseconds
     */
    gameStartTime: number;
    /**
     * The ID of the platform on which the game is being played
     */
    platformId: string;
    /**
     * The game mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)
     */
    gameMode: string;
    /**
     * The ID of the map
     */
    mapId: number;
    /**
     * The game type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)
     */
    gameType: string;
    /**
     * Banned champion information
     */
    bannedChampions: BannedChampion[];
    /**
     * The observer information
     */
    observers: Observer;
    /**
     * The participant information
     */
    participants: Participant[];
    /**
     * The amount of time in seconds that has passed since the game started
     */
    gameLength: number;
    /**
     * The queue type (queue types are documented on the Game Constants page) 
     */
    gameQueueConfigId: number;
}