import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import InputSimulacao from '../components/InputSimulacao'
import InputClient from '../components/InputClient'
import Table from '../components/Table'
import ClientFound from '../components/ClientFound'
import CredtCardForm from '../components/CredtCardForm'
import PaymentModality from '../components/PaymentModality'

const Home: NextPage = () => {
  const [formStep, setFormStep] = useState(1)

  return (
    <>
      <Head>
        <title>Desafio Klutch</title>
      </Head>

      {formStep == 1 ? <Hero title="Simulação de Taxas" imgURL="/assets/img_SimulacaoDeTaxas.svg" imgWidth={225} imgHeight={115}/> : null}
      {formStep == 1 ? <InputSimulacao/> : null}
      {formStep == 1 ? <Table/> : null}

      {formStep == 2 ? <Hero title="Solicitar emprestimo" imgURL="/assets/img_SimulacaoDeTaxas.svg" imgWidth={225} imgHeight={115}/> : null}
      {formStep == 2 ? <InputClient/> : null}
      {formStep == 2 ? <ClientFound/> : null}

      {formStep == 3 ? <Hero title="Solicitar emprestimo" imgURL="/assets/img_SimulacaoDeTaxas.svg" imgWidth={225} imgHeight={115}/> : null}
      {formStep == 3 ? <CredtCardForm/> : null}

      {formStep == 4 ? <Hero title="Solicitar emprestimo" imgURL="/assets/img_SimulacaoDeTaxas.svg" imgWidth={225} imgHeight={115}/> : null}
      {formStep == 4 ? <PaymentModality/> : null}

      <Footer formStep={formStep} setFormStep={setFormStep}/>
    </>
  )
}

export default Home
