import { useContext } from "react"
import { LendingContextSolicitation } from '../LendingContext'
import style from './style.module.scss'

interface IInstallmentProps {
  rateTableId: number,
  installmentId: number,
  installments: number,
  installmentInterest: number,
  totalLoan: number,
}

export default function Installment(props: IInstallmentProps) {
  
  const {rateTableId, installmentId, installments, installmentInterest, totalLoan} = props
  const {solicitationData, setSolicitationData} = useContext(LendingContextSolicitation)

  function handleSetInstallmentInterest (){
    if(installmentId == solicitationData.installmentId){
      setSolicitationData(oldState => {return{...oldState, installmentId: 0}})
      setSolicitationData(oldState => {return{...oldState, rateTableId: 0}})
    }

    else{
      setSolicitationData(oldState => {return{...oldState, installmentId: installmentId}})
      setSolicitationData(oldState => {return{...oldState, rateTableId: rateTableId}})
    }

  }

  return (
    <tr 
      onClick={handleSetInstallmentInterest}
      className={solicitationData.installmentId === installmentId ? style.unselected : "selected"}
    >
      <td>{installments}</td>
      <td>{installmentInterest}%</td>
      <td>R$ {((((installmentInterest/100)*totalLoan)+totalLoan)/installments).toFixed(2)}</td>
      <td>R$ {(((installmentInterest/100)*totalLoan)+totalLoan).toFixed(2)}</td>
      <td>R$ {((((installmentInterest/100)*totalLoan)+totalLoan)-totalLoan).toFixed(2)}</td>
    </tr>
  )
}
