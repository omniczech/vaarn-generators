import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vaults of Vaarn Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Generators for Vaults of Vaarn</h1>

        <p className={styles.description}>
          Vaults of Vaarn is a rad RPG made by Leo Hunt about exploring a world
          of blue sand and abandoned ruins. Pick out a thing you want to
          generate below and enjoy!
        </p>
        <Link href="/characters">Characters</Link>
      </main>
    </div>
  );
}
https://nextjs.org/docs/deployment) for more details.
