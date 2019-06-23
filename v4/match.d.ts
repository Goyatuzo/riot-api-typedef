import { Seasons } from "../data-dragon/enums/seasons";

export namespace MatchV4 {
    export interface MasteryDTO {
        masteryId: number;
        rank: number;
    }

    export interface MatchDTO {
        /**
         * Please refer to the Game Constants documentation.
         */
        seasonId: Seasons;
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
        participants: ParticipantDTO[];
        /**
         * Match duration in seconds.
         */
        gameDuration: number;
        /**
         * Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00. 
         */
        gameCreation: number;
    }

    export interface MatchlistDto {
        matches: MatchReferenceDTO[];
        totalGames: number;
        startIndex: number;
        endIndex: number;
    }

    export interface MatchReferenceDTO {
        lane; string;
        gameId: number;
        champion: number;
        platformId: string;
        season: number;
        queue: number;
        role: string;
        timestamp: number;
    }

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

    export interface ParticipantIdentityDTO {
        /**
         * Player information.
         */
        player: PlayerDTO;
        participantId: number;
    }

    export interface ParticipantStatsDTO {
        firstBloodAssist: boolean;
        visionScore: number;
        magicDamageDealtToChampions: number;
        damageDealtToObjectives: number;
        totalTimeCrowdControlDealt: number;
        longestTimeSpentLiving: number;
        /**
         * Post game rune stats.
         */
        perk1Var1: number;
        /**
         * Post game rune stats.
         */
        perk1Var3: number;
        /**
         * Post game rune stats.
         */
        perk1Var2: number;
        tripleKills: number;
        /**
         * Post game rune stats.
         */
        perk3Var3: number;


        nodeNeutralizeAssist: number;
        /**
         *  Post game rune stats.
         */
        perk3Var2: number;
        playerScore9: number;
        playerScore8: number;
        kills: number;
        playerScore1: number;
        playerScore0: number;
        playerScore3: number;
        playerScore2: number;
        playerScore5: number;
        playerScore4: number;
        playerScore7: number;
        playerScore6: number;
        /**
         *  Post game rune stats.
         */
        perk5Var1: number;
        /**
         *  Post game rune stats.
         */
        perk5Var3: number;
        /**
         *  Post game rune stats.
         */
        perk5Var2: number;
        totalScoreRank: number;
        neutralMinionsKilled: number;
        damageDealtToTurrets: number;
        physicalDamageDealtToChampions: number;
        nodeCapture: number;
        largestMultiKill: number;
        /**
         *  Post game rune stats.
         */
        perk2Var2: number;
        /**
         *  Post game rune stats.
         */
        perk2Var3: number;
        totalUnitsHealed: number;
        /**
         *  Post game rune stats.
         */
        perk2Var1: number;
        /**
         *  Post game rune stats.
         */
        perk4Var1: number;
        /**
         *  Post game rune stats.
         */
        perk4Var2: number;
        /**
         *  Post game rune stats.
         */
        perk4Var3: number;
        wardsKilled: number;
        largestCriticalStrike: number;
        largestKillingSpree: number;
        quadraKills: number;
        teamObjective: number;
        magicDamageDealt: number;
        item2: number;
        item3: number;
        item0: number;
        neutralMinionsKilledTeamJungle: number;
        item6: number;
        item4: number;
        item5: number;
        /**
         * Primary path rune.
         */
        perk1: number;
        /**
         * Primary path keystone rune.
         */
        perk0: number;
        /**
         * Primary path rune.
         */
        perk3: number;
        /**
         * Primary path rune.
         */
        perk2: number;
        /**
         * Secondary path rune.
         */
        perk5: number;
        /**
         * Secondary path rune.
         */
        perk4: number;
        /**
         *  Post game rune stats.
         */
        perk3Var1: number;
        damageSelfMitigated: number;
        magicalDamageTaken: number;
        firstInhibitorKill: boolean;
        trueDamageTaken: number;
        nodeNeutralize: number;
        assists: number;
        combatPlayerScore: number;
        /**
         * Primary rune path
         */
        perkPrimaryStyle: number;
        goldSpent: number;
        trueDamageDealt: number;
        participantId: number;
        totalDamageTaken: number;
        physicalDamageDealt: number;
        sightWardsBoughtInGame: number;
        totalDamageDealtToChampions: number;
        physicalDamageTaken: number;
        totalPlayerScore: number;
        win: boolean;
        objectivePlayerScore: number;
        totalDamageDealt: number;
        item1: number;
        neutralMinionsKilledEnemyJungle: number;
        deaths: number;
        wardsPlaced: number;
        /**
         * Secondary rune path
         */
        perkSubStyle: number;
        turretKills: number;
        firstBloodKill: boolean;
        trueDamageDealtToChampions: number;
        goldEarned: number;
        killingSprees: number;
        unrealKills: number;
        altarsCaptured: number;
        firstTowerAssist: boolean;
        firstTowerKill: boolean;
        champLevel: number;
        doubleKills: number;
        nodeCaptureAssist: number;
        inhibitorKills: number;
        firstInhibitorAssist: boolean;
        /**
         *  Post game rune stats.
         */
        perk0Var1: number;
        /**
         *  Post game rune stats.
         */
        perk0Var2: number;
        /**
         *  Post game rune stats.
         */
        perk0Var3: number;
        visionWardsBoughtInGame: number;
        altarsNeutralized: number;
        pentaKills: number;
        totalHeal: number;
        totalMinionsKilled: number;
        timeCCingOthers: number;
    }

    export interface ParticipantTimelineDTO {
        /**
         * Participant's calculated lane. MID and BOT are legacy values. (Legal values: MID, MIDDLE, TOP, JUNGLE, BOT, BOTTOM)
         */
        lane: string;
        participantId: number;

        /**
         * Creep score difference versus the calculated lane opponent(s) for a specified period. 
         */
        csDiffPerMinDeltas: { [str: string]: number };

        /**
         * Gold for a specified period. 
         */
        goldPerMinDeltas: { [str: string]: number };

        /**
         * Experience difference versus the calculated lane opponent(s) for a specified period. 
         */
        xpDiffPerMinDeltas: { [str: string]: number };

        /**
         * Creeps for a specified period. 
         */
        creepsPerMinDeltas: { [str: string]: number };

        /**
         * Experience change for a specified period. 
         */
        xpPerMinDeltas: { [str: string]: number };

        /**
         * Participant's calculated role. (Legal values: DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT) 
         */
        role: string;

        /**
         * Damage taken difference versus the calculated lane opponent(s) for a specified period. 
         */
        damageTakenDiffPerMinDeltas: { [str: string]: number };

        /**
         * Damage taken for a specified period. 
         */
        damageTakenPerMinDeltas: { [str: string]: number };
    }

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

    export interface RuneDTO {
        runeId: number;
        rank: number;
    }

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
}