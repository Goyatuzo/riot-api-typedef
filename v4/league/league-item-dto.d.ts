declare module RiotApi {
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
}