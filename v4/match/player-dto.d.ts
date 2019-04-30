export interface PlayerDTO {
    currentPlatformId: string;
    summonerName: string;
    matchHistoryUri: string;
    /**
     * Original platformId.
     */
    platformId: string;
    /**
     * Player's current accountId (Encrypted)
     */
    currentAccountId: string;
    profileIcon: number;
    /**
     * Player's summonerId (Encrypted)
     */
    summonerId: string;
    /**
     * Player's original accountId (Encrypted) 
     */
    accountId: string;
}