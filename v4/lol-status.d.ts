export namespace LolStatusV3 {
    export interface Incident {
        active: boolean;
        created_at: string;
        id: number;
        updates: Message[];
    }

    export interface Message {
        severity: string;
        author: string;
        created_at: Translation[];
        updated_at: string;
        content: string;
        id: string;
    }

    export interface Service {
        status: string;
        incidents: Incident[];
        name: string;
        slug: string;
    }

    export interface ShardStatus {
        name: string;
        region_tag: string;
        hostname: string;
        services: Service[];
        slug: string;
        locales: string[];
    }

    export interface Translation {
        locale: string;
        content: string;
        updated_at: string;
    }
}