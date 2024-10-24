import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../layout/Layout';
import EmailCompose from '../pages/EmailCompose/EmailCompose';
import Home from '../pages/home';
import Inbox from '../pages/Inbox/Inbox';
import ReadEmail from '../pages/ReadEmail/ReadEmail';
import LoginAuth from '../pages/LoginAuth/LoginAuth';
import Register from '../pages/Register/Register';
import RecoverPassword from '../pages/RecoverPassword/RecoverPassword';
import LockScreen from '../pages/LockScreen/LockScreen';
import CalendarEvent from '../pages/CaledarEvent/CalendarEvent';


function AppRoute(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/read-email" element={<ReadEmail />} />
            <Route path="/email-compose" element={<EmailCompose />} />
            <Route path="/calendar-event" element={<CalendarEvent />} />

        </Routes>
    );
}

export default AppRoute;