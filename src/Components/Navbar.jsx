import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <div className={styles.navbarLeft}>
        <h1>NFt<span style={{color:"#55B26C"}}>Eco</span></h1>
    </div>
    <div className={styles.navbarRight}>
        <div>
            <h4 className={styles.menuName}>Features</h4>
        </div>
        <div>
            <h4 className={styles.menuName}>Solution</h4>
        </div>
        <div>
            <h4 className={styles.menuName}>Team</h4>
        </div>
        <div>
            <h4 className={styles.menuName}>Contact</h4>
        </div>
        <div><i style={{color:"gray"}} class="fa-solid fa-magnifying-glass fa-1.5x"></i></div>
        <div>
            <div className={styles.signUp}><h4 className={styles.menuName}>SignUp</h4></div>
        </div>
    </div>
    </div>
  )
}

export default Navbar