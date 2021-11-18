import { Dispatch, SetStateAction } from 'react'
import style from './style.module.scss'

interface ISolicitationResumeProps {
  formStep: number;
  setFormStep: Dispatch<SetStateAction<number>>;
}

export function SolicitationResume(props: ISolicitationResumeProps) {

  const {formStep, setFormStep} = props

  function handleSeeSolicitationDetails(){
    setFormStep(formStep + 1)
  }

  return (
    <section className={`${style.solicitationResume} container`}>
      <h2>Solicitação Realizada com Sucesso!</h2>
      <p>Resumo da Solicitação</p>
      <div className="infoContainer">
        <div>
          <span>João Paulo Guedes</span>
          <span>71 9988-7766</span>
        </div>

        <div>
          <span>Taxa de Juros:</span>
          <span>12%</span>
        </div>

        <div>
          <span>4327</span>
          <span>02/24</span>
        </div>

        <div>
          <span>Parcelas:</span>
          <span>12</span>
        </div>

        <div>
          <span>Valor desejado:</span>
          <span>R$ 7.200,00</span>
        </div>

        <div>
          <span>Valor desejado:</span>
          <span>R$ 7.200,00</span>
        </div>

        <div>
          <span>Valor Total do Empréstimo:</span>
          <span>R$ 7.200,00</span>
        </div>

      </div>
      <button onClick={handleSeeSolicitationDetails}>Detalhe da Solicitação</button>
      <span className={style.sistemaCredfica}>O CredFica avaliará a solicitação.</span>
    </section>
  )
}
