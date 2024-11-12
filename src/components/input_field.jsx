import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/NotificationForm.css'
 
const Input = () => {
    const [val, setVal] = useState('');
    const { click } = () => {
        alert(val)
    }
    const change = event => {
        setVal(event.target.value)
        
    }
    return (
        <form id = "notification-form">
            <h4>Create Notification</h4>
            <textarea id = 'notification-message' placeholder = "Message..." onChange={change} 
            value = { val }/>
            <select name = "choose type" id = 'notification-type'>
                <option value="" disabled selected>Choose Type</option>
                <option value = 'alert'>Alert</option>
                <option value = 'info'>Info</option>
                <option value = 'success'>Success</option>
               </select>
               <button onClick = {click} id = 'send-notification-btn'>Send</button>
        </form>
    )

}
export default Input;