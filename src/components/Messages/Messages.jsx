import styles from "../Messages/Messages.module.css";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";

const Messages = (props)=> {
    return (
        <dev className={styles.messages}>
            <div className={styles.chats}>
                {
                    props.state.dialogs.map(dialog => {
                        return <Chat id={dialog.id} name={dialog.name} />
                    })
                };
            </div>
            <div >
                {
                    props.state.messages.map(message => {
                        return <Message id={message.id} message={message.message} />
                    })
                }
            </div>
        </dev>
    )
}

export default Messages;