declare module RiotApi {
    export interface LeagueListDTO {
        leagueId: string;
        tier: string;
        entries: LeagueItemDTO[];
        queue: string;
        name: string;
    }
}