import { ParticipantStatsDTO } from "./participant-stats-dto";
import { RuneDTO } from "./rune-dto";
import { ParticipantTimelineDTO } from "./participant-timeline-dto";
import { MasteryDTO } from './mastery-dto';

export interface ParticipantDTO {
    /**
     * Participant statistics. 
     */
    stats: ParticipantStatsDTO;
    participantId: number;

    /**
     * List of legacy Rune information. Not included for matches played with Runes Reforged. 
     */
    runes: RuneDTO[];

    /**
     * Participant timeline data. 
     */
    timeline: ParticipantTimelineDTO;

    /**
     * 100 for blue side. 200 for red side. 
     */
    teamId: number;

    /**
     * Second Summoner Spell id. 
     */
    spell2Id: number;

    /**
     * List of legacy Mastery information. Not included for matches played with Runes Reforged. 
     */
    masteries: MasteryDTO[];

    /**
     * Highest ranked tier achieved for the previous season in a specific subset of queueIds, if any, otherwise null. Used to display border in game loading screen. Please refer to the Ranked Info documentation. (Legal values: CHALLENGER, MASTER, DIAMOND, PLATINUM, GOLD, SILVER, BRONZE, UNRANKED) 
     */
    highestAchievedSeasonTier: string;

    /**
     * First Summoner Spell id. 
     */
    spell1Id: number;
    championId: number;
}