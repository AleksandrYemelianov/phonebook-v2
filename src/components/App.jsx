import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import SharedLayout from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Home = lazy(() => import("../pages/Home/Home"));
const Contacts = lazy(() => import("../pages/Сontacts/Сontacts"));
const Login = lazy(() => import("pages/Login/Login"));
const SignUp = lazy(() => import("pages/SignUp/SignUp"));
// const NotFound = lazy(() => import("pages/NotFound/NotFound"));


export const App = () => {

  return (
    <>
      {<Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='contacts' element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
          <Route path='login' element={<PublicRoute redirectTo="/contacts" component={<Login />} />} />
          <Route path='signUp' element={<PublicRoute redirectTo="/contacts" component={<SignUp />} />} />
        </Route>
        {/* <Route path='*' element={<NotFound/>} /> */}
      </Routes>}
      <ToastContainer />
    </>
  );
};




