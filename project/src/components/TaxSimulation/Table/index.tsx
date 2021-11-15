import style from './style.module.scss'
import RateTable from './RateTable'
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'

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

export function Table() {


  const [rateTables, setRateTables] = useState<IrateTables[]>([])
    
  useEffect(() =>{
    api.get('rateTable')
      .then(response => setRateTables(response.data.rateTables))
  }, [])

  
  return (
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
                  <RateTable
                    key={installment.id}
                    installments={installment.installments}
                    installmentInterest={installment.installmentInterest}
                    installmentValue={installment.installmentValue}
                    fullValue={installment.fullValue}
                    comission={installment.comission}
                  />
                ))}
              </tbody>
            </table>
          </div>
      ))}
    </section>
  )
}
