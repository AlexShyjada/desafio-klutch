import style from './style.module.scss'
export default function Footer() {
  return (
    <footer id="Footer" className={style.footer}>
      <div className="container">
        <div className="content">
          <p>Nome:</p>
          <p>Parcelas:</p>
          <p>Valor da parcela:</p>
        </div>

        <button>
          Avançar
        </button>
      </div>
    </footer>
  )
}
