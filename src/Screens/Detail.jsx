import React from 'react'
import styles from './Detail.module.scss'
import Navbar from '../Components/Navbar'
import TiketPergi from '../Components/TiketPergi'

export default function Detail () {
  let stored = JSON.parse(localStorage.getItem('items'))
  return (
    <div className={styles.detail}>
      <Navbar to='/ticket-list' judul='Detail Tiket' />
      <div className={styles.body}>
        <TiketPergi
          frombndName={stored.frombndShort}
          fromcity={stored.fromPlace}
          frombndNameFull={stored.frombndLong}
          fromTime={stored.fromTime}
          time={stored.time}
          flight={stored.flight}
          tobndName={stored.tobndShort}
          tocity={stored.toPlace}
          tobndNameFull={stored.tobndLong}
          toTime={stored.toTime}
          hrgTotal={stored.normalPrice}
          noPesawat={stored.noPesawat}
          kelas={stored.kelas}
        />
      </div>
    </div>
  )
}
