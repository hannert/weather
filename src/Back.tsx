import React from "react";
import styles from './Back.module.css'
import { DiGithub } from 'react-icons/di'

export default function Back() {
    return(
        <div className={styles.BackButton}>

            <a href='https://github.com/hannert'  target="_blank" rel="noopener noreferrer">
                <DiGithub size='50' className={styles.iconz}/>
            </a>
            
        </div>
    )
}