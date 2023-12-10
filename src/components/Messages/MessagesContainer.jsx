import Messages from "./Messages";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs_reducer";
import {connect} from "react-redux";

const mapStoreToProps = (store) => {
    return {
        dialogs: store.chatsPage.dialogs,
        messages: store.chatsPage.messages,
        newMessageText: store.chatsPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onMessageChange: (messageText) => {
            dispatch(updateNewMessageTextActionCreator(messageText))
        }
    }
}

const MessagesContainer = connect(mapStoreToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;