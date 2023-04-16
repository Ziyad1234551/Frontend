import React from 'react'
import styles from "./navbar.module.css";
import gambarCovid from '../../assets/img.png';
const Navbar = () => {
  return (
    <div>
    <div className={styles.Navbar}>
      <h2 className={styles.brand}>Covid ID</h2>
      <div className={styles.NavbarList}>
        <h4>Global</h4>
        <h4>Indonesia</h4>
        <h4>Provinsi</h4>
        <h4>About</h4>
      </div>
    </div>
    <div className={styles.hero}>
      <img src={gambarCovid} className={styles.img}></img>
      <h2 className={styles.title}>Covid ID</h2>
      <h3 className={styles.subtitle}>Monitoring Perkembangan Covid</h3>
      <p className={styles.deskripsi}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
      <button>Vaccine</button>

    </div>
    </div>
  )
}

export default Navbar;