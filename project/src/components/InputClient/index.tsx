import style from './style.module.scss'

export default function InputClient() {
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
        <button>Calcular</button>
      </div>
    </section>
  )
}