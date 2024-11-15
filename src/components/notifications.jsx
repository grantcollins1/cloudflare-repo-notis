import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotificationForm.css'
import samples from '../notification/data'

const Notifications = () => {
    const [notifications, setNotis] = useState([]);
    useEffect( () => {
        const getNotifications = async () =>  {
            const response = await fetch("/api/notifications", {
                method: "GET",
            })
            const retrieved_data = await response.json();
            retrieved_data = retrieved_data.sort((a,b => b.timestamp - a.timestamp));
            setNotis(retrieved_data);
        };
        getNotifications();

    }, []);


    return (
        <div id = "notification-feed">
                {notifications.map(noti => (
                    <div key = {noti.content.text} class = "notification-card" id = {noti.type}> {noti.content.text}
                    <div class = "notification-timestamp" >{(new Date(noti.timestamp * 1000)).toLocaleString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true
                    })}</div>
                    </div>
                ))}
        </div>
    );
};

export default Notifications;