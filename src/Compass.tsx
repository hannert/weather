import React from "react";
import styles from './Compass.module.css'
import { BiUpArrow } from 'react-icons/bi';

export default function Compass(props) {
    const deg = props.deg
    const rotationCSS = { "transform": "rotate(" + deg + "deg)"} as React.CSSProperties;
    return (
        <div className={styles.Compass}>
            <div className={styles.Needle} style={rotationCSS}> 
                <div className={styles.Point}> 
                <BiUpArrow />
                </div>
            </div>
        </div>
    )
}