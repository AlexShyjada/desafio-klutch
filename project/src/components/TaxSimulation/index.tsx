import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import style from './style.module.scss'

interface IrateTables {
  id: number;
  name: string;
  installments: [
    {
      id: number;
      installments: number;
      installmentInterest: number;
      installmentValue: number;
      fullValue: number;
      comission: number;
    }
  ]
}

export function TaxSimulation() {
  const [simulationValue, setSimulationValue] = useState(0)
  const [rateTables, setRateTables] = useState<IrateTables[]>([])

  function handleCreateNewSimulation(){
    if(simulationValue < 300 || simulationValue > 10000)
      alert('digite um valor acima de R$300,00 ou um calor abaixo de R$ 10.000')
  }

  useEffect(() =>{
    api.get('rateTable')
      .then(response => setRateTables(response.data.rateTables))
  }, [])

  return (
    <>
      <section id="InputSimulacao" className={style.inputSimulacao}>
        <h2>Valor Desejado</h2>
        <div className={style.inputGroup}>
          <label>
            <input
              id="inputAmount"
              type="number"
              placeholder="Digite o valor desejado"
              value={simulationValue}
              onChange={(e) => setSimulationValue(Number(e.target.value))}
              />
          </label>
          <button onClick={handleCreateNewSimulation}>Calcular</button>
        </div>
      </section>

      <section id="Table" className={style.table}>
        {rateTables.map(rateTable => (
            <div key={rateTable.id} className="tableGroup">
              <h2 className="container">{rateTable.name}</h2>
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
                  {rateTable.installments.map(installment => (
                    <tr key={installment.id}>
                      <td>{installment.installments}</td>
                      <td>{installment.installmentInterest}%</td>
                      <td>R$ {installment.installmentValue}</td>
                      <td>R$ {installment.fullValue}</td>
                      <td>R$ {installment.comission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        ))}
      </section>
    </>
  )
}
