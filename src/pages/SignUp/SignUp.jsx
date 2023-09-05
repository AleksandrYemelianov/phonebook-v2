import React from 'react';
import BackgraundHome from '../../images/img_home/homeBackgraund.jpg';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import css from './SignUp.module.css';

export default function SignUp() {
  return (
    <div className={css.background} style={{ backgroundImage: `url(${BackgraundHome})` }}>
      <RegistrationForm/>
    </div>
  )
}
