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


function AuthRoute(props) {
    return (
        <Routes>
            <Route path="/" element={<LoginAuth />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recover-password" element={<RecoverPassword />} />
            <Route path="/lock-screen" element={<LockScreen />} />
        </Routes>
    );
}

export default AuthRoute;