import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotificationForm.css'
import samples from '../notification/data'

const Notifications = () => {
    const [notifications, setNotis] = useState([]);
    useEffect( () => {
        const getNotifications = async () =>  {
            fetch("/api/notifications", {
                method: "GET",
            })
        };
        setNotis(samples)
        getNotifications();
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