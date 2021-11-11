import style from './style.module.scss'

export default function InputSimulacao() {
  return (
    <section id="InputSimulacao" className={style.inputSimulacao}>
      <h2>Valor Desejado</h2>
      <div className={style.inputGroup}>
        <label>
          <input
            id="inputAmount"
            placeholder="Digite o valor desejado"
            type="number"
          />
        </label>
        <button>Calcular</button>
      </div>
    </section>
  )
}
