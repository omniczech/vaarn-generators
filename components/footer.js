import Link from "next/link";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <Link href="https://vaultsofvaarn.com/">Vaults of Vaarn</Link> is made
        by <Link href="https://graculusdroog.itch.io/">Leo Holt</Link>, these
        generators are made and maintained by{" "}
        <Link href="https://github.com/omniczech">Omniczech</Link>
      </p>
    </footer>
  );
};

export default Footer;
