import style from './style.module.scss'

export default function ClientFound() {
  return (
    <section className={style.clientInfoContainer}>
      <p>Cliente encontrado:</p>
      <span className={style.cpfInfo}>074.119.055-93</span>
      <span className={style.userName}>Lara Test</span>
      <button>Solicitar</button>
    </section>
  )
}
