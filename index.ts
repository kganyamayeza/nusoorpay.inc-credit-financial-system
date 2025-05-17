export interface Profile {
    id: string;
    name: string;
    email: string;
    age: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateProfileRequest {
    name: string;
    email: string;
    age: number;
}

export interface UpdateProfileRequest {
    name?: string;
    email?: string;
    age?: number;
}

export interface ProfileResponse {
    profile: Profile;
}