import Head from 'next/head'
import Keyboard from '../components/Keyboard'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Command Box</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../command-box-logo.svg" />
      </Head>
      
      <Keyboard />
    
    </div>
  )
}
