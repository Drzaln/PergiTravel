import React from 'react'
import styles from './List.module.scss'
import Navbar from '../Components/Navbar'
import Ticket from "../Components/Ticket";

export default function List () {
  return (
    <div className={styles.list}>
      <Navbar judul='Jakarta - Bali' isi='Jumat, 30 Nov 2019 ( 1 Dewasa )' />
      <Ticket/>
    </div>
  )
}
