import React from 'react';
import PersonalNavbar from '../Components/Shared/PersonalNavbar';
import PersonalFooter from './../Components/Shared/PersonalFooter';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <PersonalNavbar></PersonalNavbar>
            <Outlet></Outlet>
            <PersonalFooter></PersonalFooter>
        </div>
    );
};

export default Main;