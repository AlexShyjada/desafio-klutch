import style from './style.module.scss'

export function CostumerInput() {
  return (
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
  )
}
