import React from 'react'
import styles from './Detail.module.scss'
import Navbar from '../Components/Navbar'
import TiketPergi from '../Components/TiketPergi'

export default function Detail () {
  return (
    <div className={styles.detail}>
      <Navbar to='/ticket-list' judul='Detail Tiket' />
      <div className={styles.body}>
        <TiketPergi
          tobndName='CGK'
          tocity='Jakarta'
          tobndNameFull='Soekarno Hatta'
          toTime='00:35'
          time='2h'
          flight='Langsung'
          frombndName='DPS'
          fromcity='Bali'
          frombndNameFull='Ngurah Rai Int'
          fromTime='01:35'
          hrgTotal='1.547.050'
        />
      </div>
    </div>
  )
}
