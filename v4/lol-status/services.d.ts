import { Incident } from "./incident";

export interface Service {
    status: string;
    incidents: Incident[];
    name: string;
    slug: string;
}