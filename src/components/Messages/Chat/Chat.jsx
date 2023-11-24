import React from 'react'
import {NavLink} from "react-router-dom";
import styles from "./Chat.module.css";

function Chat(props) {
  return (
    <div className="chat">
        <NavLink to={'/messages/' + props.id} className={({ isActive }) => isActive ? `${styles.active}` : ''}>{props.name}</NavLink>
    </div>
  )
}

export default Chat
