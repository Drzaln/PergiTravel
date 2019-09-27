import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

export default function Navbar (props) {
  return (
    <div>
      <div className={styles.navbar}>
        <Link to={props.to} replace>
          <img
            src={require('../Assets/back.svg')}
            alt='back'
            className={styles.menu}
          />
        </Link>
        <div>
          <div className={styles.judul}>{props.judul}</div>
          <div className={styles.isi}>{props.isi}</div>
        </div>
        <img
          src={require('../Assets/user.svg')}
          alt='Profile'
          className={styles.user}
        />
      </div>
    </div>
  )
}
