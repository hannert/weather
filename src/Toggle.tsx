import React, { useEffect, useState } from "react"
import styles from './Toggle.module.css'
import { BiWinkSmile} from 'react-icons/bi'

export default function Toggle() {
    const[theme, toggleTheme] = useState(localStorage.getItem('theme') || 'dark');

    // ↓ Similar to componentDidMount
    useEffect(() => {
        setTheme(); 
    });

    function initialTheme() {
        console.log('initial')
        console.log(localStorage.getItem('theme') )
        if(localStorage.getItem('theme') === 'dark'){
            toggleTheme('dark')
            setTheme()
        }
        if(localStorage.getItem('theme') === 'light'){
            toggleTheme('light')
            setTheme()
        }
    }

    function setTheme() {
        console.log("Theme changed to " + theme )
        localStorage.setItem('theme', theme)

        document.documentElement.className = theme
    }


    // If theme is currently dark set new theme to light, dark otherwise 
    // Then set localStorage to the theme to save it
    function handleClick() {
        (theme === 'dark') ? toggleTheme('light') : toggleTheme('dark');
        localStorage.setItem('theme', theme);
        setTheme();
    }


    return (
        <button onClick={handleClick} className={styles.Toggle} onLoad={initialTheme} theme={theme}>
            <span className={styles.Toggle__inner}><BiWinkSmile /></span>
            <span className={styles.Toggle__outer}></span>
        </button>
    )   


}