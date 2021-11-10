import style from './style.module.scss'

export default function Table() {
  return (
    <section id="Table" className={style.table}>
      <h2 className="container">Tabela padrão</h2>
      <table className="container">
        <thead>
          <tr>
            <th>Parcela</th>
            <th>Juros da Parcela</th>
            <th>Valor Parcela</th>
            <th>Valor Total</th>
            <th>Comissão Parceiro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>15%</td>
            <td>R$1.115,00</td>
            <td>R$1.115,00</td>
            <td>R$1.115,00</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
