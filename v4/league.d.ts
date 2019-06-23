import { AllQueues } from "../constants/queues";

export namespace LeagueV4 {
    export interface LeagueEntryDTO {
        queueType: string;
        summonerName: string;
        hotStreak: boolean;
        miniSeries: MiniSeriesDTO;
        wins: number;
        veteran: boolean;
        losses: number;
        rank: string;
        leagueId: string;
        inactive: boolean;
        freshBlood: boolean;
        tier: string;

        /**
         * Player's summonerId (Encrypted) 
         */
        summonerId: string;
        leaguePoints: number;
    }

    export interface LeagueItemDTO {
        summonerName: string;
        hotStreak: number;
        miniSeries: MiniSeriesDTO;
        wins: number;
        veteran: boolean;
        losses: number;
        freshBlood: boolean;
        inactive: boolean;

        /**
         * Player's summonerId (Encrypted) 
         */
        summoneorId: string;
        leaguePoints: number;
    }

    export interface LeagueListDTO {
        leagueId: string;
        tier: string;
        entries: LeagueItemDTO[];
        queue: AllQueues;
        name: string;
    }

    export interface MiniSeriesDTO {
        progress: string;
        losses: number;
        target: number;
        wins: number;
    }
}