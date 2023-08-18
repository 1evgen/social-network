import axios from "axios";

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

let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2075f7da-a7fe-49a8-9778-1b19c73defb0'
    }

})


export const usersApi = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<ResponseUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then((response)=> response.data)
    },
    getAuth: ()=> {
        return instance.get<AuthResponseType>(`/auth/me`)
            .then((response)=> response.data)
    },
    followUser: (userId: number)=> {
        return instance.post<FollowUnFollowUserType>(`/follow/${userId}`)
    },
    unfollowUser: (userId: number)=> {
        return instance.delete<FollowUnFollowUserType>(`/follow/${userId}`)
    }
}

