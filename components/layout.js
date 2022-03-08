import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import MyDate from '../components/date'
const imageLoader = require("../lib/imageLoader");

const title = "Wall of shame"
export const siteTitle = "Wall of shame"

export default function Layout({ children, home }) {
  return (
    <>
      <div className={utilStyles.bgWrap}>
      <Image
        alt="Ukraine"
        src="image.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        loader={imageLoader}
      />
    </div>
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Companies that continue operating in Russia"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h2 className={utilStyles.heading2Xl}>{title}</h2>
          </>
        ) : (
          <>
            <h2 className={utilStyles.heading2Xl}>{title}</h2>
          </>
        )}
      </header>
          <MyDate date={new Date()}></MyDate>
          <main>
          {children}
        
        </main>
      {!home && (
        <div className={styles.backToHome}>
            <a className={utilStyles.link} href="/">
            ← Back
              </a>
        </div>
      )}
    </div>
</>
  )
}
