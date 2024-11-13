import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/NotificationForm.css'
 
const Input = () => {
    const [val, setVal] = useState('')
    const [type, setType] = useState('');
    const click = (event) => {
        data = []
        data.push(JSON.stringify({
            "type": type,
            "content": {
                "text" : val
            },
            "read": false}))
        NOTIFICATIONS.put("notifications", data)
        event.preventDefault()
        alert(type)
        fetch("/api/notifications", {
  method: "POST",
  body: JSON.stringify({
        "type": type,
        "content": {
            "text" : val
        },
        "read": false
  }),
});

    }
    const wipe = (event) => {
        event.preventDefault()
        fetch("/api/notifications", {
            method: "DELETE",
        });

    }
    const handleSelectChange = (event) => {
        setType(event.target.value);
    }

    const change = (event) => {
        setVal(event.target.value)
    }
    return (
        <form id = "notification-form">
            <h4>Create Notification</h4>
            <textarea id = 'notification-message' placeholder = "Message..." onChange={change} 
            value = { val }/>
            <select name = "choose type" id = 'notification-type' value = {type} onChange = {handleSelectChange}>
                <option value="" disabled selected>Choose Type</option>
                <option value = 'alert'>Alert</option>
                <option value = 'info'>Info</option>
                <option value = 'success'>Success</option>
               </select>
               <button onClick = {click} id = 'send-notification-btn'>Send</button>
               <button onClick = { wipe } id = 'delete-button'>Delete</button>
        </form>
    )

}
export default Input;