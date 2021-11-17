import { Dispatch, SetStateAction, useContext } from "react";
import { LendingContextSolicitation } from "..";
import style from "./style.module.scss";

interface IPaymentModality {
  formStep: number;
  setFormStep: Dispatch<SetStateAction<number>>;
}

export function PaymentModality(props: IPaymentModality) {

  const {formStep, setFormStep} = props

  const { setSolicitationData } = useContext(LendingContextSolicitation);

  function handleSelectPaymentModalityAsCreditCard(){
    setSolicitationData((oldState) => {
      return {
        ...oldState,
        paymentModality: 'Cartão de Crédito',
      };
    });
    setFormStep(formStep + 1)
  }

  return (
    <section
      id="PaymentModality"
      className={`${style.paymentModality} container`}
    >
      <h2>Escolha a modalidade:</h2>

      <button
        onClick={handleSelectPaymentModalityAsCreditCard}
        className={style.credtCard}
      >
        Cartão de Crédito
      </button>

      <span>ou</span>

      <button className={style.credtCardDisable}>Crédito Consignado</button>
      <p>Em breve</p>
    </section>
  );
}
function setSolicitationData(arg0: (oldState: any) => any) {
  throw new Error("Function not implemented.");
}

