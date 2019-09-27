import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Appbar.module.scss'

export default function Appbar () {
  return (
    <div>
      <div className={styles.navbar}>
        <img
          src={require('../Assets/menu.svg')}
          alt='Menu'
          className={styles.menu}
        />
        <Link to='/'>
          <img
            src={require('../Assets/ic_logo.png')}
            alt='Logo'
            className={styles.logo}
          />
        </Link>
        <img
          src={require('../Assets/user.svg')}
          alt='Profile'
          className={styles.user}
        />
      </div>
    </div>
  )
}
