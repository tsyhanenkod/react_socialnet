import Messages from "./Messages";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs_reducer";
import StoreContext from "../../storeContext";

const MessagesContainer = () => {
    return (
    <StoreContext.Consumer>
        { (store) => {
            let state = store.getState()

            const addMessage = () => {
                store.dispatch(addMessageActionCreator())
            }

            const onMessageChange = (messageText) => {
                store.dispatch(updateNewMessageTextActionCreator(messageText))
            }

            return (
                <Messages addMessage={addMessage}
                          onMessageChange={onMessageChange}
                          dialogs={state.chatsPage.dialogs}
                          messages={state.chatsPage.messages}
                          newMessageText={state.chatsPage.newMessageText}/>
            )
        }
    }
    </StoreContext.Consumer>
)}

export default MessagesContainer;