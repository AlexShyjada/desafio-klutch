import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import '../services/server'
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

      {
        formStep == 1 
          ? 
            <>
              <Hero 
                title="Simulação de Taxas"
                imgURL="/assets/img_SimulacaoDeTaxas.svg"
                imgWidth={225}
                imgHeight={115}
              />
              <SimulationInput/>
              <Table/>
            </>
          : null
      }

      {
        formStep == 2 
          ? 
            <>
              <Hero 
                title="Simulação de Taxas"
                imgURL="/assets/img_SimulacaoDeTaxas.svg"
                imgWidth={225}
                imgHeight={115}
              />
              <CostumerInput/>
              <CostumerInformationFound/>
            </>
          : null
      }

      {
        formStep == 3 
          ? 
            <>
              <Hero 
                title="Simulação de Taxas"
                imgURL="/assets/img_SimulacaoDeTaxas.svg"
                imgWidth={225}
                imgHeight={115}
              />
              <CreditCardForm/>
            </>
          : null
      }

      {
        formStep == 4 
          ? 
            <>
              <Hero 
                title="Simulação de Taxas"
                imgURL="/assets/img_SimulacaoDeTaxas.svg"
                imgWidth={225}
                imgHeight={115}
              />
              <PaymentModality/>
            </>
          : null
      }

      <Footer formStep={formStep} setFormStep={setFormStep}/>
    </>
  )
}

export default Home
