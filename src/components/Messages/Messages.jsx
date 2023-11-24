import styles from "../Messages/Messages.module.css";
import Chat from "./Chat/Chat";
import Message from "./Message/Message";

const Messages = (props)=> {
    return (
        <dev className={styles.messages}>
            <div className={styles.chats}>
                <Chat id='1' name='Den' />
                <Chat id='2' name='Max' />
                <Chat id='3' name='Vika' />
                <Chat id='4' name='Lena' />
            </div>
            <div className={styles.dialog}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message="I'm fine!" />
            </div>
        </dev>
    )
}

export default Messages;