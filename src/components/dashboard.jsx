// Dashboard.js
import React, { useState } from 'react';
import Input from './input_field';
import Notifications from './notifications';
import '../styles/NotificationForm.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Input />
      <Notifications/>
    </div>
  );
};

export default Dashboard;
