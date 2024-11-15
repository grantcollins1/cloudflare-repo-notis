import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/NotificationForm.css'
 
const Input = () => {
    const [val, setVal] = useState('')
    const [type, setType] = useState('');
    const click = (context, event) => {
        event.preventDefault()
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('/api/testing', {
            method: 'POST',
            body: JSON.stringify({
              "type": type,
              "content": {
                "text1": val
              },
              "read": false
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
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
               <button onClick = {handleSubmit} id = 'send-notification-btn'>Send</button>
               <button onClick = { wipe } id = 'delete-button'>Delete</button>
        </form>
    )

}
export default Input;