import React from 'react'
import styles from './Detail.module.scss'
import Navbar from '../Components/Navbar'
import TiketPergi from '../Components/TiketPergi'

export default function Detail () {
  return (
    <div className={styles.detail}>
      <Navbar to='/ticket-list' judul='Detail Tiket' />
      <div className={styles.body} >
        <TiketPergi />
      </div>
    </div>
  )
}
