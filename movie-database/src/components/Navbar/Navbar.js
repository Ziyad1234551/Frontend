/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import styled from "styled-components";
import styles from "./Navbar.module.css";
// Import Link dari React Router
import { Link } from "react-router-dom";
const NavbarContainer = styled.div`
 background-color: #4361ee;
  padding: 1rem;
  color: #fff;

`;
const StyledNavbar = styled.nav `
  display: flex;
  flex-direction: row;
h1{
  font-size: 2.4rem;
  margin-bottom: 1rem;
  padding-left: 40px;
  cursor: pointer;
}
ul{
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-left: 550px;
  padding-top: 20px;
} 
li{
  margin-bottom: 1rem;
  margin-left: auto;
  padding-left: 20px;

}
Link {
  text-decoration: none;
  color: #fff;
}

/* Medium Screen */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .navbar__brand {
    margin-bottom: 0;
  }

  .navbar__list {
    flex-direction: row;
  }

  .navbar__item {
    margin: 0 1rem;
  }
}
  `
;
function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <NavbarContainer>
      <StyledNavbar>
        <div>
          <h1 className={styles.navbar__brand}>Movie App</h1>
        </div>
        <div>
          {/*
           * Membuat Link/Navigasi.
           * Menggunakan Link Component dari React Router
           */}
          <ul>
            <li >
              <Link to="/" className={styles.navbar__link}>Home</Link>
            </li>
            <li >
              <Link to="/movie/create" className={styles.navbar__link}>Add Movie</Link>
            </li>
            <li >
              <Link to="/movie/popular"className={styles.navbar__link}>Popular</Link>
            </li>
            <li>
              <Link to="/movie/now" className={styles.navbar__link}>Now Playing</Link>
            </li>
            <li>
              <Link to="/movie/top" className={styles.navbar__link}>Top Rated</Link>
            </li>
            <li>
              <Link to="/coba"className={styles.navbar__link}>Coba</Link>
            </li>
          </ul>
        </div>
      </StyledNavbar>
    </NavbarContainer>
  );
}

export default Navbar;
