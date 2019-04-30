import { TeamBansDTO } from './team-bans-dto';

export interface TeamStatsDTO {
    /**
     * Flag indicating whether or not the team scored the first Dragon kill.
     */
    firstDragon: boolean;
    /**
     * Flag indicating whether or not the team destroyed the first inhibitor.
     */
    firstInhibitor: boolean;
    /**
     * If match queueId has a draft, contains banned champion data, otherwise empty.
     */
    bans: TeamBansDTO[];
    /**
     * Number of times the team killed Baron.
     */
    baronKills: number;
    /**
     * Flag indicating whether or not the team scored the first Rift Herald kill.
     */
    firstRiftHerald: boolean;
    /**
     * Flag indicating whether or not the team scored the first Baron kill.
     */
    firstBaron: boolean;
    /**
     * Number of times the team killed Rift Herald.
     */
    riftHeraldKills: number;
    /**
     * Flag indicating whether or not the team scored the first blood.
     */
    firstBlood: boolean;
    /**
     * 100 for blue side. 200 for red side.
     */
    teamId: number;
    /**
     * Flag indicating whether or not the team destroyed the first tower.
     */
    firstTower: boolean;
    /**
     * Number of times the team killed Vilemaw.
     */
    vilemawKills: number;
    /**
     * Number of inhibitors the team destroyed.
     */
    inhibitorKills: number;
    /**
     * Number of towers the team destroyed.
     */
    towerKills: number;
    /**
     * For Dominion matches, specifies the points the team had at game end.
     */
    dominionVictoryScore: number;
    /**
     * String indicating whether or not the team won.There are only two values visibile in public match history. (Legal values: Fail, Win)
     */
    win: string;
    /**
     * Number of times the team killed Dragon. 
     */
    dragonKills: number;
}