// pages/index.js

import Head from 'next/head';
import Image from 'next/image';
import BackgroundImage from '../public/background.jpg'; // Adjust the path as needed
import styles from '../styles/Home.module.css'; // Adjust the path as needed

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Eikarna Landing Page</title>
        <meta name="description" content="Protecting your digital world, one byte at a time" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div className="background-wrapper">
          <Image src={BackgroundImage} alt="Background" layout="fill" objectFit="cover" />
          <div className="dim-overlay"></div> {/* Dimmed overlay */}
        </div>

        <div className="content">
          <h1 className="title">Hello World!</h1>
          <p className="description">
            I'm passionate about cybersecurity and dedicated to helping individuals and businesses stay secure online.
            With expertise in AI, Machine Learning, SysAdmin, and Programming, I provide comprehensive solutions tailored to your digital protection needs.
          </p>

          <div className="grid">
            <a href="#" className="card">
              <h3>About Me</h3>
              <p>Learn more about my cybersecurity journey.</p>
            </a>

            <a href="#" className="card">
              <h3>My Social Media</h3>
              <p>Connect with me on Twitter, LinkedIn, and GitHub.</p>
            </a>

            <a href="#" className="card">
              <h3>My Team/Organizations</h3>
              <p>Discover the organizations I collaborate with.</p>
            </a>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Created with ❤️ by Adnan</p>
      </footer>
    </div>
  );
}
