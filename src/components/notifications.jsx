import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotificationForm.css'
import samples from '../notification/data'

const Notifications = () => {
    const [notifications, setNotis] = useState([]);
    useEffect( () => {
        const getNotifications = async () =>  {
            const response = await fetch("/api/testing", {
                method: "GET",
            })
            //const retrieved_data = await response.json();
        };

        setNotis(samples);
    }, []);


    return (
        <div id = "notification-feed">
                {notifications.map(noti => (
                    <div key = {noti.content.text} class = "notification-card" id = {noti.type}> {noti.content.text}
                    </div>
                ))}
        </div>
    );
};

export default Notifications;