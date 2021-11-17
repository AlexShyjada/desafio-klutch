import style from "./style.module.scss";
import Installment from "./Installment";
import { api } from "../../services/api";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { LendingContextSolicitation } from "..";

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

interface IReviewOfInstallmentValueProps {
  formStep: number;
  setFormStep: Dispatch<SetStateAction<number>>;
}

export function ReviewOfInstallmentValue(
  props: IReviewOfInstallmentValueProps
) {
  const { formStep, setFormStep } = props;

  const [simulationValue, setSimulationValue] = useState(0);
  const [rateTables, setRateTables] = useState<IrateTables[]>([]);
  const { solicitationData, setSolicitationData } = useContext(
    LendingContextSolicitation
  );

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
    } else {
      setSolicitationData((oldState) => {
        return {
          ...oldState,
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
      <section></section>

      <section id="Table" className={style.table}>
        {rateTables.map((rateTable) => (
          <>
            {solicitationData.rateTableId === rateTable.id ? (
              <>
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
                          installments={installment.installments}
                          installmentInterest={installment.installmentInterest}
                          desiredValue={solicitationData.desiredValue}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ))}
      </section>
    </>
  );
}
