import React from 'react'
import img from "../../assets/img.png"
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.row}>
      <div className={styles.left}>
      <img src={img}/>

      </div>
    </div>
  )
}

export default Hero