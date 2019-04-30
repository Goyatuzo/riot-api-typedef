import { LeagueItemDTO } from "./league-item-dto";

export interface LeagueListDTO {
    leagueId: string;
    tier: string;
    entries: LeagueItemDTO[];
    queue: string;
    name: string;
}