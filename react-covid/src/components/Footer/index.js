import React, { useState } from 'react'
import styles from "./Footer.module.css";

const Footer = () => {
  

  return (
    <>

    
      <div className={styles.footer}>

       <div className={styles.covid}>
        <h1>Covid ID</h1>
       <h3>Developed by ziyad</h3>
       </div>
      </div>
      <div className={styles.group6}>
        <h4>Global</h4>
        <h4>Indonesia</h4>
        <h4>Provinsi</h4>
        <h4>about</h4>
      </div>
    </>


  )
}

export default Footer