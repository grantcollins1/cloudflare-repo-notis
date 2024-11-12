import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Notification = () => {
    const [noti, setNotification] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getNotification = async () => {
            const resp = await resp.json();
            const notiResp = await resp.json();
            setNotification(notiResp);
        };

        getNotification();

        
    }, [id]);
    if (!Object.keys(noti).length) return <div />;
    return (
        <div>
            <h1>{noti.title}</h1>
            <p>{noti.text}</p>
        </div>
    );

};

export default Notification;