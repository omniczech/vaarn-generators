import Link from "next/link";
import { useTranslation } from "next-i18next";
import styles from "../styles/Home.module.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <p>
        <Link href="https://vaultsofvaarn.com/">{t("Vaults of Vaarn")}</Link>{" "}
        {t("is made by")}{" "}
        <Link href="https://graculusdroog.itch.io/">Leo Hunt</Link>,
        {t("these generators are made and maintained by")}{" "}
        <Link href="https://github.com/omniczech">Omniczech</Link>
      </p>
    </footer>
  );
};

export default Footer;
