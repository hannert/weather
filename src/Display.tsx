import React from 'react'
import styles from './Display.module.css'
import { WiAlien, WiFahrenheit, WiDaySnow , WiThermometer, WiDegrees} from 'react-icons/wi'
import {FaHandLizard} from 'react-icons/fa'
import {TbWorld, TbWorldLatitude, TbWorldLongitude} from 'react-icons/tb'


export default function Display(props) {
    return(
        <div className={styles.displayBody}>
            <div className={styles.infoGroup}>
                {props?.location ?
                    <div>
                        <h2>Location: </h2>
                        <p>{props.location} </p>
                        <WiAlien />
                    </div>
                    : 
                    <div>
                        <h2>Location: </h2>
                        <p>Somewhere in the ocean... 🌊 </p>
                    </div>
                }
                <div className={styles.container}> 
                    <span><WiThermometer/> Temperature: </span> 
                    <span>{props?.temperature} <WiFahrenheit/> </span>
                </div>
                {props?.condition &&
                    <div className={styles.container}>  
                        <span><FaHandLizard/> Conditions: </span> 
                        <span>{props.condition} </span>
                    </div>
                }
                <div className={styles.container}> 
                    <span className={styles.title}><TbWorldLatitude/> Latitude: </span>
                    <span className={styles.content}>{Number(props?.latitude).toFixed(3)} <WiDegrees/> </span>
                
                </div> 
                <div className={styles.container}> 
                    <span className={styles.title}><TbWorldLongitude/> Longitude: </span>
                    <span className={styles.content}>{Number(props?.longitude).toFixed(3)} <WiDegrees/> </span>
                </div> 
            </div>
        </div>
    )
}   