import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import {
  Hero,
  Footer,
  SimulationInput,
  Table,
  CreditCardForm,
  CostumerInput,
  CostumerInformationFound,
  PaymentModality,
} from '../components'


const Home: NextPage = () => {
  const [formStep, setFormStep] = useState(1)

  return (
    <>
      <Head>
        <title>Desafio Klutch</title>
      </Head>

      {formStep == 1 ? <Hero title="Simulação de Taxas" imgURL="/assets/img_SimulacaoDeTaxas.svg" imgWidth={225} imgHeight={115}/> : null}
      {formStep == 1 ? <SimulationInput/> : null}
      {formStep == 1 ? <Table/> : null}

      {formStep == 2 ? <Hero title="Solicitar emprestimo" imgURL="/assets/img_SimulacaoDeTaxas.svg" imgWidth={225} imgHeight={115}/> : null}
      {formStep == 2 ? <CostumerInput/> : null}
      {formStep == 2 ? <CostumerInformationFound/> : null}

      {formStep == 3 ? <Hero title="Solicitar emprestimo" imgURL="/assets/img_SimulacaoDeTaxas.svg" imgWidth={225} imgHeight={115}/> : null}
      {formStep == 3 ? <CreditCardForm/> : null}

      {formStep == 4 ? <Hero title="Solicitar emprestimo" imgURL="/assets/img_SimulacaoDeTaxas.svg" imgWidth={225} imgHeight={115}/> : null}
      {formStep == 4 ? <PaymentModality/> : null}

      <Footer formStep={formStep} setFormStep={setFormStep}/>
    </>
  )
}

export default Home
