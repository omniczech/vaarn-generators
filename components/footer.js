import Link from "next/link";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <Link href="https://vaultsofvaarn.com/">Vaults of Vaarn</Link>는
        by <Link href="https://graculusdroog.itch.io/">Leo Hunt</Link>의 저작물이며, 이 생성기의 제작과 유지보수는{" "}
        <Link href="https://github.com/omniczech">Omniczech</Link>각 맡고 있습니다.{" "}  
        이 한국어 페이지는 <Link href="https://github.com/omniczech">vedminstuden</Link>가 포크하여 수정한 것임을 밝힙니다.
      </p>
    </footer>
  );
};

export default Footer;
