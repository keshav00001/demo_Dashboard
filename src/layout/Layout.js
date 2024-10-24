import React, { useContext } from 'react';
import Home from '../pages/home';
import AppRoute from '../routes/AppRoute';
import AppSidebar from '../components/Sidebar/AppSidebar';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { UserContext } from '../components/Header/Header';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';
import LoginAuth from '../pages/LoginAuth/LoginAuth';
import Register from '../pages/Register/Register';
import RecoverPassword from '../pages/RecoverPassword/RecoverPassword';
import LockScreen from '../pages/LockScreen/LockScreen';
import AuthRoute from '../routes/AuthRoute';
function Layout(props) {
    const collepavalue = useContext(UserContext);
    console.log("..ur collape value...", collepavalue);

    // const [user, setUser] = useState(true)

    const { sideWidth, user } = useContext(AppContext)


    console.log("sidebar------------", sideWidth)
    console.log("sidebar- user-----------", user)

    return (
        <>
            {/* {user ? <div >
                <AuthRoute />
            </div> : */}
            <div className={`app__layout ${sideWidth ? 'short__sidebar' : ''}`}>
                <AppSidebar />
                <div className='layout_main_body'>
                    <AppRoute />
                </div>
            </div>
            {/* } */}


        </>
    );
}

export default Layout;