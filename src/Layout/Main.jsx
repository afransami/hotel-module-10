import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import BackgroundImage from '../BackgroundImage';

const Main = () => {
    return (
        <div>
            {/* <BackgroundImage></BackgroundImage> */}
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;