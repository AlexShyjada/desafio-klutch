import Image from 'next/image'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <header id="Header" className={styles.header}>
      <button>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 20H35" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 10H35" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 30H35" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      </button>
      <a href="https://www.klutch.com.br/">
        <Image
          src="/assets/logo_Klutch.svg"
          alt="Picture of the author"
          width={210.55}
          height={55}
          priority
        />
      </a>
      <span></span>
    </header>
  )
}
