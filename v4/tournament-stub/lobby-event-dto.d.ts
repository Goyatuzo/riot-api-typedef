export interface LobbyEventDTO {
    /**
     * The type of event that was triggered
     */
    eventType: string;
    /**
     * The summonerId that triggered the event (Encrypted)
     */
    summonerId: string;
    /**
     * Timestamp from the event 
     */
    timestamp: string;
}