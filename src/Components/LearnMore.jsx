import React from 'react'
import styles from "./LearnMore.module.css"

const Explore = () => {
  return (
    <div className={styles.explore}>
         <div className={styles.exploreRight}>
            <img src="https://www.pngarts.com/files/18/NFT-PNG-Photo-HQ.png" alt="" />
        </div>
        <div className={styles.exploreLeft}>
            <div className={styles.exploreBold}>
                <h1>The Problem</h1>
            </div>
            <div className={styles.exploreSmall}>
                <p>A world where creators can use the entereum</p>
                <p>blockchain to value there online expression</p>
                <p>in entirely new ways.</p>
            </div>
            <div className={styles.exploreBottom}>
                <div className={styles.exploreButton}><h5>Learn More</h5></div>
               
            </div>
        </div>
       
    </div>
  )
}

export default Explore