import { LendingContextSolicitation } from "../../LendingContext";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../services/api";
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

interface IFooterProps {
  formStep: number;
  setFormStep: React.Dispatch<React.SetStateAction<number>>;
}

export function Footer(props: IFooterProps) {

  const {formStep, setFormStep} = props

  const [rateTables, setRateTables] = useState<IrateTables[]>([]);
  const {solicitationData} = useContext(LendingContextSolicitation);

  const plan = rateTables.map((table) =>
    table.id === solicitationData.rateTableId ? table.name : ""
  );
  const installments = rateTables.map((table) =>
    table.installments.map((installment) =>
      installment.id === solicitationData.installmentId
        ? installment.installments
        : 0
    )
  );

  useEffect(() => {
    api
      .get("rateTables")
      .then((response) => setRateTables(response.data.rateTables));
  }, []);

  function handleAdvanceToNewStep() {
    setFormStep(formStep + 1)
  }

  return (
    <>
      {solicitationData.installmentId === 0? "" :
        <footer id="Footer" className={style.footer}>
          <div className="container">
            <div className="content">
              <p>
                Plano selecionado: {plan} | Parcelas: {solicitationData.installments} | Valor da Parcela: R$ {solicitationData.installmentValue}
              </p>
            </div>
            <button onClick={handleAdvanceToNewStep}>Avançar</button>
          </div>
        </footer>
      }
    </>
  );
}
