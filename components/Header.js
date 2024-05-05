import Link from "next/link";
import { useTranslation } from "next-i18next";
import styles from "../styles/Home.module.css";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <header className={styles.header}>
      <Link href="/">{t("Home")}</Link>
      <Link href="/characters">{t("Characters")}</Link>
      <Link href="/region">{t("Region")}</Link>
      <Link href="/assorted">{t("Assorted Generators")}</Link>
    </header>
  );
};

export default Header;
