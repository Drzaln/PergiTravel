import React from 'react'
import Appbar from "../Components/Appbar";
import Body from "../Components/Body";
import styles from "./home.module.scss";

export default function Home() {
    return (
        <div className={styles.home} >
            <Appbar/>
            <Body/>
        </div>
    )
}
