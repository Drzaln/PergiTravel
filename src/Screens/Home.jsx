import React from 'react'
import Navbar from "../Components/Navbar";
import Body from "../Components/Body";
import styles from "./home.module.scss";

export default function Home() {
    return (
        <div className={styles.home} >
            <Navbar/>
            <Body/>
        </div>
    )
}
