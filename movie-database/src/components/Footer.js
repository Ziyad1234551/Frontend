import styled from "styled-components";

/**
 * Membuat component Footer.
 * Component Footer menampilkan footer website.
 * @returns
 */
const Footer = styled.footer `
text-align: center;
color: #fff;
`
function Footer() {
  return (
    <Footer>
      <h2>Copyright @aufaroot18</h2>
      <p>Website ini dibuat menggunakan ReactJS</p>
    </Footer>
  );
}

export default Footer;
