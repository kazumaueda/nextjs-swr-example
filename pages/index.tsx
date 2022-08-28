import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Content from '../components/Content'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js SWR Example</title>
        <meta name="description" content="Next.js SWR Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content />
    </div>
  )
}

export default Home
