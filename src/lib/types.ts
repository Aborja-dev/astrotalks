export interface TalkInfo {
    id: string;
    title: string;
    description: string;
    tags: string[];
    coverURl: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    title: string;
    bio: string;
}

export interface Section {
    title: string;
    subtitle?: string;
    description?: string;
}