import Container from 'components/Container/Container';
import AppBar from 'components/AppBar/AppBar';
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
// import css from './SharedLayout.module.css'

const SharedLayout = () => {
    return (
        <Container>
            <AppBar/>
            <Suspense>
                <Outlet/>
            </Suspense>
        </Container>
    );
};

export default SharedLayout


