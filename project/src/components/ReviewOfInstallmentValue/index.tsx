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

  const [rateTables, setRateTables] = useState<IrateTables[]>([]);
  const { solicitationData, setSolicitationData } = useContext(LendingContextSolicitation);

  useEffect(() => {
    api
      .get("rateTables")
      .then((response) => setRateTables(response.data.rateTables));
  }, []);

  function handleConcluded() {
    setFormStep(formStep + 1)
  }

  return (
    <>
      <section className="container">
        <div className={style.inputGroup}>
          <label>
            Tabela
            <select name="" id="">
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
          </label>

          <label>
            Valor desejado:
            <input type="text"/>
          </label>

          <label>
            Valor Total do Empréstimo:
            <input type="text"/>
          </label>

          <label>
            Parcelas:
            <select name="" id="">
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
          </label>

          <label>
            Valor da parcela:
            <select name="" id="">
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
          </label>

          <div className={style.btnGroup}>
            <button>Automático</button>
            <button>Manual</button>
          </div>
        </div>
      </section>

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
      <button
        onClick={handleConcluded}
        className={style.btnComplete}
      >
        Concluir
      </button>
    </>
  );
}
