import style from './style.module.scss'
export default function Footer() {
  return (
    <footer id="Footer" className={style.footer}>
      <div className="container">
        <button>
          Voltar
        </button>
        <div className="content">
          <p>Plano selecionado:</p>
        </div>

        <button>
          Avançar
        </button>
      </div>
    </footer>
  )
}
