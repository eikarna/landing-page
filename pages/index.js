// pages/index.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eikarna</title>
        <meta name="description" content="Protecting your digital world, one byte at a time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Eikarna's Hub!</h1>

        <p className={styles.description}>
          I'm passionate about cybersecurity and dedicated to helping individuals and businesses stay secure online.
          With expertise in AI, Machine Learning, SysAdmin, and Programming, I provide comprehensive solutions tailored to your digital protection needs.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>About Me</h3>
            <p>Learn more about my cybersecurity journey.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>My Social Media</h3>
            <p>Connect with me on Twitter, LinkedIn, and GitHub.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>My Team/Organizations</h3>
            <p>Discover the organizations I collaborate with.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Created with ❤️ by Adnan</p>
      </footer>
    </div>
  );
}
