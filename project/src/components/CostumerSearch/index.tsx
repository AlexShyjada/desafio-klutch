import style from './style.module.scss'

export function CostumerSearch() {
  return (
    <>
      <section id="InputSimulacao" className={style.inputSimulacao}>
        <h2>Busque o Cliente</h2>
        <div className={style.inputGroup}>
          <label>
            <input
              id="inputAmount"
              placeholder="Digite o CPF desejado"
              type="number"
            />
          </label>
          <button>Buscar</button>
        </div>
      </section>

      <section className={style.clientInfoContainer}>
        <p>Cliente encontrado:</p>
        <span className={style.cpfInfo}>074.119.055-93</span>
        <span className={style.userName}>Lara Test</span>
        <button>Solicitar</button>
      </section>
    </>
  )
}
