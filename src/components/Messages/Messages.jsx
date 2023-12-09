import styles from "../Messages/Messages.module.css";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Messages = (props)=> {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
        newMessageElement.current.value = '';
    };

    let onMessageChange = () => {
        let messageText = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(messageText))
    }

    return (
        <dev className={styles.messages}>
            <div className={styles.chats}>
                {
                    props.state.dialogs.map(dialog => {
                        return <Chat id={dialog.id} name={dialog.name} />
                    })
                };
            </div>
            <div>
                {
                    props.state.messages.map(message => {
                        if (message.userId === 1) {
                            return (
                                <div className={styles.sender}>
                                    <Message state={message}/>
                                </div>
                            )
                        } else if (message.userId === 2) {
                            return (
                                <div className={styles.getter}>
                                    <Message state={message}/>
                                </div>
                            )
                        }
                    })
                }
                <div>
                    <textarea ref={newMessageElement} onChange={() => onMessageChange()} className={styles.textArea} value={props.newMessageText} placeholder='text your message'></textarea>
                    <button className={styles.sendBtn} onClick={() => addMessage()}>Send</button>
                </div>
            </div>
        </dev>
    )
}

export default Messages;