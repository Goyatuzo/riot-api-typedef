import { Translation } from "./translation";

export interface Message {
    severity: string;
    author: string;
    created_at: Translation[];
    updated_at: string;
    content: string;
    id: string;
}