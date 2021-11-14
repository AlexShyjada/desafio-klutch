export default function RateTable(props: 
  {
    installments: number,
    installmentInterest: number,
    installmentValue: number,
    fullValue: number,
    comission: number
  }
){

  return (
    <tr>
      <td>{props.installments}</td>
      <td>{props.installmentInterest}%</td>
      <td>R$ {props.installmentValue}</td>
      <td>R$ {props.fullValue}</td>
      <td>R$ {props.comission}</td>
    </tr>
  )
}
