/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import styles from "./Navbar.module.css";
// Import Link dari React Router
import { Link } from "react-router-dom";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Movie App</h1>
        </div>
        <div>
          {/*
           * Membuat Link/Navigasi.
           * Menggunakan Link Component dari React Router
           */}
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <Link to="/" className={styles.navbar__link}>Home</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/create" className={styles.navbar__link}>Add Movie</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/popular"className={styles.navbar__link}>Popular</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/now" className={styles.navbar__link}>Now Playing</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/top" className={styles.navbar__link}>Top Rated</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/coba"className={styles.navbar__link}>Coba</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
