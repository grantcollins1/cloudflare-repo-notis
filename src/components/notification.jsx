import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Notification = () => {
    const [noti, setNotification] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getNotification = async () => {
            try {
                const resp = await fetch(`/api/notifications/${id}`);
                const notiResp = await resp.json();
                setNotification(notiResp);
            } catch (error) {
                console.error("Error fetching notification:", error);
            }
        };

        getNotification();
    }, [id]);

    if (!Object.keys(noti).length) return <div>Loading...</div>;

    return (
        <div>
            <h1>{noti.title}</h1>
            <p>{noti.text}</p>
            <p>
                <em>Published {new Date(noti.published_at).toLocaleString()}</em>
            </p>
            <p>
                <Link to="/">Go back</Link>
            </p>
        </div>
    );
};

export default Notification;
