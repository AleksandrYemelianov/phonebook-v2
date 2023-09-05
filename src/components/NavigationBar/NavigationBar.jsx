import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGetUserQuery } from 'redux/authUser/userSlice';
// import Logo from 'components/Logo/Logo';

function NavigationBar() {
  const {isSuccess} =  useGetUserQuery();
  return (
    <>
      {isSuccess ? <NavLink to='/contacts' >Contacts</NavLink> :
        <NavLink to='/login' >Login</NavLink>}
    </>
  );
};

export default NavigationBar   

// className={({isActive}) => isActive ? css.active : css.link}
