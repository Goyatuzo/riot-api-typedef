import { MiniSeriesDTO } from './mini-series-dto';

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