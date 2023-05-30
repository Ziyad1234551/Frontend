/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import styled from "styled-components";
import styles from "./Footer.module.css";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  const Footer = styled.div `
   background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;
  h2{
    margin-bottom: 1rem;

  }
  p{
    margin-bottom: 1rem;

  }
  `;
  return (
    <Footer>
      <footer>
        <h2 className={styles.footer__title}>Movie App</h2>
        <p className={styles.footer__author}>Created by aufaroot18</p>
      </footer>
    </Footer>
  );
}

export default Footer;
