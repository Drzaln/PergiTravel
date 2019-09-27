import React from 'react'
import styles from './BottomActionBar.module.scss'

export default function BottomActionBar () {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.sort}>
          <img
            src={require('../Assets/reverse.svg')}
            alt='Menu'
            className={styles.menu}
          />
          <p className={styles.teks}>Sort By</p>
        </div>
        <div className={styles.pembatas} />
        <div className={styles.sort}>
          <img
            src={require('../Assets/filter.svg')}
            alt='Profile'
            className={styles.user}
          />
          <p className={styles.teks}>Filter</p>
        </div>
      </div>
    </div>
  )
}
