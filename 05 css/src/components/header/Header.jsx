import React from 'react'
import styles from "../header/Header.module.css"


const Header = () => {
  return (
    <div className={styles.Header}>
        Krishan Here
        <button className={styles.btn}> Login here!</button>
    </div>
  )
}

export default Header