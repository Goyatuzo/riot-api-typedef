export interface TeamBansDTO {
    /**
     * Turn during which the champion was banned. 
     */
    pickTurn: number;

    /**
     * Banned championId. 
     */
    championId: number;
}