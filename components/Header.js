import Link from "next/link";
import styles from "../styles/Home.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">홈</Link>
      <Link href="/characters">캐릭터</Link>
      <Link href="/region">지역</Link>
      <Link href="/vaults">볼트</Link>
      <Link href="/assorted">그 외 여러가지 생성기</Link>
    </header>
  );
};

export default Header;
