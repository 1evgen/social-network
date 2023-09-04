import React from "react";
import {AddMessageFormType, Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {compose, Dispatch} from "redux";
import {DialogsPageType, sendMessageCreator} from "../../Redux/dialog-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    sendMessage: (values: AddMessageFormType) => void
}



const mapStateToProps = (state: AppStateType )=> {
   return {
     dialogsPage: state.dialogsPage,
     isAuth: state.auth['isAuth']
   }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
    sendMessage: (values: AddMessageFormType) => {
        dispatch(sendMessageCreator(values))
    }
}
}

//export const  DialogsContainer = withAuthRedirect( connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
// (mapStateToProps, mapDispatchToProps)(Dialogs));

export const  DialogsContainer = compose<React.ComponentType>(
     connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps),
     withAuthRedirect
 )
 (Dialogs)