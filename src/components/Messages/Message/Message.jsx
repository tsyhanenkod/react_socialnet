import React from 'react'
import styles from "./Message.module.css";

function Message(props) {
  return (
    <div>
            <p>{props.state.text}</p>
    </div>
  )
}

export default Message