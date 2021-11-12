import styles from './styles.module.scss'
import Image from 'next/image'
interface IHero {
  title: string;
  imgURL: string;
  imgWidth: number;
  imgHeight: number;
}

export function Hero(props: IHero) {

  const {title, imgURL, imgWidth, imgHeight} = props

  return (
    <section id="Hero" className={styles.hero}>
      <div className="container">
        <div className="content">
          <Image
            src={imgURL}
            alt={title}
            width={imgWidth}
            height={imgHeight}
          />
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  )
}
