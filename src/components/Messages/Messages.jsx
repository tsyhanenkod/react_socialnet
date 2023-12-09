import styles from "../Messages/Messages.module.css";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";
import React from "react";

const Messages = (props)=> {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage()
    };

    let onMessageChange = () => {
        let messageText = newMessageElement.current.value
        props.onMessageChange(messageText)
    }

    return (
        <dev className={styles.messages}>
            <div className={styles.chats}>
                {
                    props.dialogs.map(dialog => {
                        return <Chat id={dialog.id} name={dialog.name} />
                    })
                };
            </div>
            <div>
                {
                    props.messages.map(message => {
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
                        } else {
                            return (
                                <p>No Data</p>
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