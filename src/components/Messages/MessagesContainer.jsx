import Messages from "./Messages";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs_reducer";

const MessagesContainer = (props)=> {
    let state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (messageText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(messageText))
    }

    return (
        <Messages addMessage={addMessage}
                  onMessageChange={onMessageChange}
                  dialogs={state.chatsPage.dialogs}
                  messages={state.chatsPage.messages}
                  newMessageText={state.chatsPage.newMessageText}/>
    )
}

export default MessagesContainer;