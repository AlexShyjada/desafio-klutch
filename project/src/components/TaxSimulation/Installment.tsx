import { useContext } from "react";
import { LendingContextSolicitation } from "../LendingContext";
import style from "./style.module.scss";

interface IInstallmentProps {
  rateTableId: number;
  installmentId: number;
  installments: number;
  installmentInterest: number;
  desiredValue: number;
}

export default function Installment(props: IInstallmentProps) {
  const {
    rateTableId,
    installmentId,
    installments,
    installmentInterest,
    desiredValue,
  } = props;
  const { solicitationData, setSolicitationData } = useContext(
    LendingContextSolicitation
  );

  const totalValue = Number(
    ((installmentInterest / 100) * desiredValue + desiredValue).toFixed(2)
  );
  const comission = Number((totalValue - desiredValue).toFixed(2));
  const installmentValue = Number((totalValue / installments).toFixed(2));

  function handleSetInstallmentInterest() {
    if (installmentId == solicitationData.installmentId) {
      setSolicitationData((oldState) => {
        return {
          ...oldState,
          installments: 0,
          installmentValue: 0,
          comission: 0,
          installmentId: 0,
          rateTableId: 0,
        };
      });
    } 
    
    else {
      setSolicitationData((oldState) => {
        return {
          ...oldState,
          installments,
          installmentValue,
          comission,
          installmentId,
          rateTableId,
        };
      });
    }
  }

  return (
    <tr
      onClick={handleSetInstallmentInterest}
      className={
        solicitationData.installmentId === installmentId
          ? style.unselected
          : "selected"
      }
    >
      <td>{installments}</td>
      <td>{installmentInterest}%</td>
      <td>R$ {installmentValue}</td>
      <td>R$ {totalValue}</td>
      <td>R$ {comission}</td>
    </tr>
  );
}
