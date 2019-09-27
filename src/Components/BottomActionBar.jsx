import React from 'react'
import styles from './BottomActionBar.module.scss'

export default function BottomActionBar () {
  return (
    <div>
      <div className={styles.navbar}>
      <div>
        <img
          src={require('../Assets/reverse.svg')}
          alt='Menu'
          className={styles.menu}
        />
        <text>Sort By</text>
        </div>
        <div className={styles.pembatas} />
        <div>
        <img
          src={require('../Assets/filter.svg')}
          alt='Profile'
          className={styles.user}
        />
        <text>Filter</text>
        </div>
      </div>
    </div>
  )
}
