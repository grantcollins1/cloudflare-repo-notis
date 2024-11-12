import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Notifications = () => {
    const [notifications, setNotis] = useState([]);
    useEffect( () => {
        const getNotifications = async () =>  {
            const resp = [{
                id: 1,
                title: 'My first blog post',
                text: 'Hello!',
                published_at: new Date('2020-10-23'),
            },
            {
                id: 2,
                title: 'Updating my blog',
                text: 'second',
                published_at: new Date('2020-10-26'),
            } ]
            //const notiResp = await resp.json();
            setNotis(resp);
        };
        getNotifications();
    }, []);

    return (
        <div>
            <h1>Notifications</h1>
            {notifications.length > 0 ? (
                notifications.map(noti => (
                    <div key={noti.id}>
                        <h2>
                            <Link to={`/notifications/${noti.id}`}>{noti.title}</Link>
                        </h2>
                    </div>
                ))
            ) : (
                <p>No notifications available.</p>
            )}
        </div>
    );
};

export default Notifications;