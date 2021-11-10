import styles from './styles.module.scss'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="Hero" className={styles.hero}>
      <div className="container">
        <div className="content">
          <Image
            src="/assets/img_SimulacaoDeTaxas.svg"
            alt="Picture of the author"
            width={225}
            height={115}
          />
          <h1>Simulação de Taxas</h1>
        </div>
      </div>
    </section>
  )
}
