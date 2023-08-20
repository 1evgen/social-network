import React from "react";
import {sendMessageCreator,  updateNewMessageBodyCreator} from "../../Redux/Store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {Dispatch} from "redux";
import {DialogsPageType} from "../../Redux/dialog-reducer";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}




const mapStateToProps = (state: AppStateType )=> {
   return {
     dialogsPage: state.dialogsPage,
     isAuth: state.auth['isAuth']
   }
}

// type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    onNewMessageChange: (body: string) => void
    sendMessage: () => void
}

const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
       onNewMessageChange: (body: string) => {
        dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
        dispatch(sendMessageCreator())
    }
}
}
export const  DialogsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);