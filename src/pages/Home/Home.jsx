import React from 'react'
import BackgraundHome from '../../images/img_home/homeBackgraund.jpg';
import css from './Home.module.css'

function Home() {
  return (
    <div className={css.background} style={{ backgroundImage: `url(${BackgraundHome})` }}></div>
  )
}

export default Home