import axios from "axios";
import {DataAuthType} from "../Redux/auth-reducer";

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '7c470b5d-d209-4290-8749-e903fabbcb56',
    }

})


export const usersApi = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<ResponseUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data)
    },

    followUser: (userId: number) => {
        return instance.post<FollowUnFollowUserType>(`/follow/${userId}`)
    },
    unfollowUser: (userId: number) => {
        return instance.delete<FollowUnFollowUserType>(`/follow/${userId}`)
    },
    getProfile: (userId: string) => {
        console.warn("use new API")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get<GetProfileResponseType>(`/profile/${userId}`)
    },
    getStatus: (userId: string) => {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus: (status: string)=> {
        return instance.put(`/profile/status`,{status: status})
    }
}

export const authAPI = {
    getMe: () => {
        return instance.get<AuthResponseType<{id: number, email: string, login: string}>>(`/auth/me`)
            .then((response) => response.data)
    },
    login: (dataAuth: DataAuthType)=> {
        return instance.post<AuthResponseType<{id: number}>>(`auth/login`,dataAuth )
    },
    logout: ()=> {
        return instance.delete<AuthResponseType<{}>>(`auth/login`)
    }
}


export type UserType = {
    name: string;
    id: number;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    followed: boolean;
};

type ResponseUsersType = {
    items: Array<UserType>
    status: null | string,
    followed: boolean
    totalCount: number,
    error: null | string
}




type AuthResponseType<D> = {
    resultCode: number
    messages: String[]
    data: D
}

type FollowUnFollowUserType = {
    resultCode: number
    messages: String[],
    data: {}
}

type GetProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string | null
        large: string | null
    }
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}