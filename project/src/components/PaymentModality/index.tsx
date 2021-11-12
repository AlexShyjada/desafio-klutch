import style from './style.module.scss'

export function PaymentModality() {
  return (
    <section id="PaymentModality" className={`${style.paymentModality} container`}>
      <h2>Escolha a modalidade:</h2>

      <button className={style.credtCard}>
        Cartão de Crédito
      </button>

      <span>
        ou
      </span>

      <button className={style.credtCardDisable}>
        Crédito Consignado
      </button>
      <p></p>
    </section>
  )
}
