import { PlayerDTO } from "./player-dto";

export interface ParticipantIdentityDTO {
    /**
     * Player information.
     */
    player: PlayerDTO;
    participantId: number;
}