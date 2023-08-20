import axios from "axios";
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
            .then((response)=> response.data)
    },
    getMe: ()=> {
        return instance.get<AuthResponseType>(`/auth/me`)
            .then((response)=> response.data)
    },
    followUser: (userId: number)=> {
        return instance.post<FollowUnFollowUserType>(`/follow/${userId}`)
    },
    unfollowUser: (userId: number)=> {
        return instance.delete<FollowUnFollowUserType>(`/follow/${userId}`)
    },
    getProfile: (userId: string)=> {
        return instance.get<GetProfileResponseType>(`/profile/${userId}`)
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

export type InfoAuthType = {
    id: number | null,
    email: string,
    login: string
}


type AuthResponseType = {
    resultCode: number
    messages: String[]
    data: InfoAuthType
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
    fullName:string
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