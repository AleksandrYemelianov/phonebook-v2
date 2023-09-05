import LoginForm from 'components/LoginForm/LoginForm'
import React from 'react'
import BackgraundHome from '../../images/img_home/homeBackgraund.jpg';
import css from './Login.module.css'

export default function Login() {
  return (
    <div className={css.background} style={{ backgroundImage: `url(${BackgraundHome})` }}>
      <LoginForm/>
    </div>
  )
}
