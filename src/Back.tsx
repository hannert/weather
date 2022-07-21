import React from "react";
import styles from './Back.module.css'
import { DiGithub } from 'react-icons/di'

export default function Back() {
    return(
        <div className={styles.BackButton}>
            <div>chris RPE 8.5</div>
            <DiGithub/>
        </div>
    )
}