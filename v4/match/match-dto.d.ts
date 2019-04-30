import { ParticipantIdentityDTO } from "./participant-identity-dto";
import { ParticipantDTO } from './participant-dto';
import { TeamStatsDTO } from "./team-stats-dto";

export interface MatchDTO {
    /**
     * Please refer to the Game Constants documentation.
     */
    seasonId: number;
    /**
     * Please refer to the Game Constants documentation.
     */
    queueId: number;
    gameId: number;
    /**
     * Participant identity information.
     */
    participantIdentities: ParticipantIdentityDTO[];
    /**
     * The major.minor version typically indicates the patch the match was played on.
     */
    gameVersion: string;
    /**
     * Platform where the match was played.
     */
    platformId: string;
    /**
     * Please refer to the Game Constants documentation.
     */
    gameMode: string;
    /**
     * Please refer to the Game Constants documentation.
     */
    mapId: number;
    /**
     * Please refer to the Game Constants documentation.
     */
    gameType: string;
    /**
     * Team information.
     */
    teams: TeamStatsDTO[];
    /**
     * Participant information.
     */
    participants: ParticipantDto[];
    /**
     * Match duration in seconds.
     */
    gameDuration: number;
    /**
     * Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00. 
     */
    gameCreation: number;
}