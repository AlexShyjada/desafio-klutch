import style from './style.module.scss'
interface IFooterProps {
  formStep: number;
  setFormStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function Footer(props: IFooterProps) {

  const {formStep, setFormStep} = props

  function handleAdvanceToNewStep(){
    formStep < 6 ? setFormStep(formStep + 1) : null
  }

  function handleReturnToPreviousStep(){
    formStep > 1 ? setFormStep(formStep - 1) : null
  }

  return (
    <footer id="Footer" className={style.footer}>
      <div className="container">
        <button onClick={handleReturnToPreviousStep}>
          Voltar
        </button>
        <div className="content">
          <p>Plano selecionado:</p>
        </div>
        <button onClick={handleAdvanceToNewStep}>
          Avançar
        </button>
      </div>
    </footer>
  )
}
