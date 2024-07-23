import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Read <Link href="/posts/first-post">this post!</Link>
      </h1>
    </div>
  );
}
