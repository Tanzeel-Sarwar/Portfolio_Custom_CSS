import './globals.css'
import styles from './layout.module.css'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tanzeel Sarwar - Portfolio',
  description: 'Personal portfolio of Tanzeel Sarwar, a web developer and designer.',
  
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio Website</title>
        <meta name="description" content='Personal portfolio of Tanzeel Sarwar, a web developer and designer.'/>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <div className={styles.layout}>
          <header className={styles.header}>
            <div className={`container ${styles.headerContent}`}>
              <Link href="/" className={styles.logo}>
                Tanzeel Sarwar
              </Link>
              <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
          </header>
          <main className={`container ${styles.main}`}>{children}</main>
          <footer className={styles.footer}>
            <div className="container">
              © {new Date().getFullYear()} Tanzeel Sarwar. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}