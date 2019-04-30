import { Message } from "./message";

export interface Incident {
    active: boolean;
    created_at: string;
    id: number;
    updates: Message[];
}