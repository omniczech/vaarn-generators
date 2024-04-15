import Link from "next/link";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/characters">Characters</Link>
      <Link href="/region">Region</Link>
      <Link href="/vaults">Vaults</Link>
      <Link href="/assorted">Assorted Generators</Link>
    </header>
  );
};

export default Header;
