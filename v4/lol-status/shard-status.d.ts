import { Service } from "./services";

export interface ShardStatus {
    name: string;
    region_tag: string;
    hostname: string;
    services: Service[];
    slug: string;
    locales: string[];
}