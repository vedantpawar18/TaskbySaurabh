import React from 'react'
import styles from "./Explore.module.css"

const Explore = () => {
  return (
    <div className={styles.explore}>
        <div className={styles.exploreLeft}>
            <div className={styles.exploreBold}>
                <h1>Discover the </h1>
                <h1> latest NFTs </h1>
                <h1> ecosystem</h1>
            </div>
            <div className={styles.exploreSmall}>
                <p>A world where creators can use the entereum</p>
                <p>blockchain to value there online expression</p>
                <p>in entirely new ways.</p>
            </div>
            <div className={styles.exploreBottom}>
                <div className={styles.exploreButton}><h5>Explore</h5></div>
                <div>
                    <div><i style={{color:"white", padding:"5px"}} class="fa-regular fa-circle-play fa-2x"></i></div>
                    <div style={{color:"white", padding:"5px"}}>Intro Video</div>
                </div>
            </div>
        </div>
        <div className={styles.exploreRight}>
            <img src="https://static.vecteezy.com/system/resources/previews/010/841/604/original/3d-illustration-hand-and-nft-png.png" alt="" />
        </div>
    </div>
  )
}

export default Explore