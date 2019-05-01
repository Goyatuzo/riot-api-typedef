export interface BannedChampion {
    /**
     * The turn during which the champion was banned
     */
    pickTurn: number;
    /**
     * The ID of the banned champion
     */
    championId: number;
    /**
     * The ID of the team that banned the champion 
     */
    teamId: number;
}