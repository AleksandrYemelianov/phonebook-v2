import NavigationBar from 'components/NavigationBar/NavigationBar'
import UserMenu from 'components/UserMenu/UserMenu'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGetUserQuery } from 'redux/authUser/userSlice';


import css from './AppBar.module.css';

function AppBar() {
  const { data, isSuccess } = useGetUserQuery();

  return (
    <header className={css.header}>
      <NavLink to='/'>Home</NavLink>
      <NavigationBar />
      {isSuccess && <UserMenu data={data} />}
    </header>
  );
}

export default AppBar