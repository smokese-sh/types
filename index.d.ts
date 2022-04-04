import { ObjectId } from "mongodb";

export declare type User = {
    _id: ObjectId

    username: string;
    password: string;
    token: string;

    avatar: Buffer | null;
    followers: ObjectId[];
    following: ObjectId[];
    posts: unknown;

    bio: null | string;

    phone: null | string;
    email: null | string;

    otherAccounts: unknown;

    dms: UserDM[]

    platformAdmin: boolean;
}

type UserDM = {
    user: ObjectId,
    messages: Message[]
}

export declare type Message = {
    content: string | null;
    files: Buffer[] | null;
    post: ObjectId | null;
    likes: ObjectId[]
}

export declare type Session = {
    access_token: string;
    refresh_token: string;
    token: string;
    user: {
         _id: ObjectId;
    }
}

export declare type ClientUser = {
    avatar: Buffer | null;
    username: string;
    access_token: string;
    refresh_token: string;
}

export declare type Post = {
    _id: ObjectId;
    user: ObjectId;
    content: string;
    likes: ObjectId[];
}


export declare type ImageFile = {
    _id: ObjectId,
    type: FileTypes.IMAGE,
    file: {
        buffer: Buffer;
        name: string;
    }
}

export declare type VideoFile = {
    _id: ObjectId,
    type: FileTypes.VIDEO,
    file: {
        location: string;
        length: number;
        sound: boolean;
        name: string;
    }
}

export declare type GifFile = {
    _id: ObjectId,
    type: FileTypes.GIF,
    file: {
        location: string;
        length: number;
        name: string;
    }
}

export declare type UnknownFile = {
    _id: ObjectId,
    type: FileTypes.UNKNOWN,
    file: {
        location: string;
        extension: string;
        name: string;
    }
}

export declare enum FileTypes {
    VIDEO = 0,
    IMAGE = 1,
    GIF = 2,
    UNKNOWN = 3
}