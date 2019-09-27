import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

export default function Tombol () {
  return (
    <div className={styles.button}>
      <Link to='/ticket-list'>
        <Button
          color='warning'
          style={{ width: '100%', borderRadius: 8, fontWeight: 'bold' }}
        >
          Cari Tiket Pesawat
        </Button>
      </Link>
    </div>
  )
}
