import { useEffect, useState, useContext } from "react";
import { api } from "../../services/api";
import { LendingContextSolicitation } from "../LendingContext";
import Installment from "./Installment";
import style from "./style.module.scss";

interface IrateTables {
  id: number;
  name: string;
  installments: [
    {
      id: number;
      installments: number;
      installmentInterest: number;
    }
  ];
}

export function TaxSimulation() {
  const [simulationValue, setSimulationValue] = useState(0);
  const [rateTables, setRateTables] = useState<IrateTables[]>([]);
  const { solicitationData, setSolicitationData } = useContext(LendingContextSolicitation);

  useEffect(() => {
    api
      .get("rateTables")
      .then((response) => setRateTables(response.data.rateTables));
  }, []);

  function handleCreateNewSimulation() {
    if (simulationValue < 300 || simulationValue > 10000) {
      alert(
        "digite um valor acima de R$300,00 ou um calor abaixo de R$ 10.000"
      );
      setSimulationValue(0);
    } 
    
    else {
      setSolicitationData((oldState) => {
        return { ...oldState, 
          desiredValue: simulationValue,
          installments: 0,
          installmentValue: 0,
          comission: 0,
          installmentId: 0,
          rateTableId: 0,
        };
      });
      setSimulationValue(0);
    }
  }

  return (
    <>
      <section id="InputSimulacao" className={style.inputSimulacao}>
        <h2>Valor Desejado</h2>
        <div className={style.inputGroup}>
          <label>
            <input
              id="inputAmount"
              type="number"
              step="0,01"
              placeholder="Digite o valor desejado"
              value={simulationValue}
              onChange={(e) => setSimulationValue(Number(e.target.value))}
            />
          </label>
          <button onClick={handleCreateNewSimulation}>Calcular</button>
        </div>
      </section>

      <section id="Table" className={style.table}>
        {rateTables.map((rateTable) => (
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
                {rateTable.installments.map((installment) => (
                  <Installment
                    key={installment.id}
                    installmentId={installment.id}
                    rateTableId={rateTable.id}
                    installments={installment.installments}
                    installmentInterest={installment.installmentInterest}
                    desiredValue={solicitationData.desiredValue}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>
    </>
  );
}
