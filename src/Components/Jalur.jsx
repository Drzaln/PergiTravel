import React from 'react'
import { Input } from 'reactstrap'
import styles from './Jalur.module.scss'

export default function Jalur () {
  return (
    <div className={styles.jalur}>
      <Input
        name='asal'
        id='formAsal'
        placeholder='Asal'
        style={{ borderRadius: '8px 8px 0px 0px', marginBottom: 1, padding:22 }}
      />

      <div className={styles.balik} >
      <img
            src={require('../Assets/reverse.svg')}
            alt='Logo'
            className={styles.logo}
          />
      </div>

      <Input
        name='tujuan'
        id='formTujuan'
        placeholder='Tujuan'
        style={{ borderRadius: '0px 0px 8px 8px', padding:22 }}
      />
    </div>
  )
}
