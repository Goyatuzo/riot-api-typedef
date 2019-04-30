import { MatchReferenceDTO } from "./match-reference-dto";

export interface MatchlistDto {
    matches: MatchReferenceDTO[];
    totalGames: number;
    startIndex: number;
    endIndex: number;
}