export namespace SummonerV4 {
    export interface SummonerDTO {
        /**
         * ID of the summoner icon associated with the summoner.
         */
        profileIconId: number;
        /**
         * Summoner name.
         */
        name: number;
        /**
         * Encrypted PUUID. Exact length of 78 characters.
         */
        puuid: number;
        /**
         * Summoner level associated with the summoner.
         */
        summonerLevel: number;
        /**
         * Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change
         */
        revisionDate: number;
        /**
         * Encrypted summoner ID. Max length 63 characters.
         */
        id: number;
        /**
         * Encrypted account ID. Max length 56 characters. 
         */
        accountId: number;
    }
}