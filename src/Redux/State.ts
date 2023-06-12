import {typeMyPostsProps} from "../App";

type dialogsData = {
    id: number;
    name: string;
};
type messagesDataType = {
    id: number;
    message: string;
};
type postDataType = {
    id: number;
    message: string;
    likesCount: number;
};

export type StateType = {
    dialog: {
        dialogsData: Array<dialogsData>;
        messagesData: Array<messagesDataType>;
        newMessageBody: string
    };
    post: {
        postData: Array<postDataType>;
        newPostText: string;
    };
}

export type typeStore = {
    _state: StateType;
    getState: () => typeof store._state
    _callSubscriber: (state: StateType) => void;
    subscribe: (observer: (state: StateType) => void) => void;
    dispatch: (action: actionType) => void
};
type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}
type UpdateActionType = {
    type: "UPDATE-POST"
    newText: string
}
type  UpdateNewMessageBodyType = {
    type: "UPDATE-NEW-MESSAGE-BODY"
    body: string
}
type SendMessageType = {
    type: "SEND-MESSAGE"
}


export type actionType = AddPostActionType | UpdateActionType | UpdateNewMessageBodyType | SendMessageType

export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    }
}
export const changePostAC = (newText: string): UpdateActionType => {
    return {
        type: "UPDATE-POST",
        newText: newText
    }
}

export const sendMessageCreator = (): SendMessageType => {
    return {
        type: "SEND-MESSAGE",
    }
}
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyType => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    };
}


export let store: typeStore = {
    _state: {
        dialog: {
            dialogsData: [
                {id: 1, name: "Ward"},
                {id: 2, name: "Maddison"},
                {id: 3, name: "Tielemans"},
                {id: 4, name: "Ndidi"},
                {id: 5, name: "Daka"},
            ],
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Hello"},
                {id: 3, message: "How are you"},
                {id: 4, message: "fine"},
                {id: 5, message: "Yo"},
            ],
            newMessageBody: ""
        },
        post: {
            postData: [
                {id: 1, message: "Hi how are you", likesCount: 15},
                {id: 2, message: "Hi, i'm fine thanks", likesCount: 5},
            ],
            newPostText: "it-kamasutra.com"
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("s");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        if (action.type === "ADD-POST") {
            let newPost: typeMyPostsProps = {
                id: new Date().getDate(),
                message: action.newPostText,
                likesCount: 10,
            };
            this._state.post.postData.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-POST") {
            this._state.post.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialog.newMessageBody = action.body
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialog.newMessageBody;
            this._state.dialog.newMessageBody = '';
            this._state.dialog.messagesData.push({id: 6, message: body})
            this._callSubscriber(this._state);
        }
    }
};