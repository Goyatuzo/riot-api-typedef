export namespace TournamentV4 {
    export interface LobbyEventDTOWrapper {
        eventList: LobbyEventDTO[];
    }

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

    export interface TournamentCodeDTO {
        /**
         * The game map for the tournament code game
         */
        map: string;
        /**
         * The tournament code.
         */
        code: string;
        /**
         * The spectator mode for the tournament code game.
         */
        spectators: string;
        /**
         * The tournament code's region. (Legal values: BR, EUNE, EUW, JP, LAN, LAS, NA, OCE, PBE, RU, TR)
         */
        region: string;
        /**
         * The provider's ID.
         */
        providerId: number;
        /**
         * The team size for the tournament code game.
         */
        teamSize: number;
        /**
         * The summonerIds of the participants(Encrypted)
         */
        participants: string[];
        /**
         * The pick mode for tournament code game.
         */
        pickType: string;
        /**
         * The tournament's ID.
         */
        tournamentId: number;
        /**
         * The lobby name for the tournament code game.
         */
        lobbyName: string;
        /**
         * The password for the tournament code game.
         */
        password: string;
        /**
         * The tournament code's ID.
         */
        id: number;
        /**
         * The metadata for tournament code. 
         */
        metaData: string;
    }
}