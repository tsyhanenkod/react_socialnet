import React from 'react'
import styles from "./Message.module.css";

function Message(props) {
  return (
    <div className={styles.message}>
        <p>{props.message}</p>
    </div>
  )
}

export default Message