import { useContext } from "react";
import { LendingContextSolicitation } from "../LendingContext";
import style from "./style.module.scss";

interface IInstallmentProps {
  installments: number;
  installmentInterest: number;
  desiredValue: number;
}

export default function Installment(props: IInstallmentProps) {
  const {
    installments,
    installmentInterest,
    desiredValue,
  } = props;

  const totalValue = Number(
    ((installmentInterest / 100) * desiredValue + desiredValue).toFixed(2)
  );
  const comission = Number((totalValue - desiredValue).toFixed(2));
  const installmentValue = Number((totalValue / installments).toFixed(2));


  return (
    <tr>
      <td>{installments}</td>
      <td>{installmentInterest}%</td>
      <td>R$ {installmentValue}</td>
      <td>R$ {totalValue}</td>
      <td>R$ {comission}</td>
    </tr>
  );
}
