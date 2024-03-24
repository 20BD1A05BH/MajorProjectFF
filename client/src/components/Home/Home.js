import React from 'react'
import styles from './Home.module.css'
import img from './FFCG.jpg'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>FINANCEFORGE</h1>
                <h2>Easiest Accounting for freelancers and small businesses</h2>
                <div className={styles.imgContainer} style={{marginTop:50}}>
                    <img src={img} alt="accounting-app"/>
                </div>
            </section>
        </div>
    )
}

export default Home
