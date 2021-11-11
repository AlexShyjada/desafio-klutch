import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import InputSimulacao from '../components/InputSimulacao'
import InputClient from '../components/InputClient'
import Table from '../components/Table'

const Home: NextPage = () => {
  const [formStep, setFormStep] = useState(1)
  return (
    <>
      <Head>
        <title>Desafio Klutch</title>
      </Head>

      {formStep == 1 ? <Hero title="Simulação de Taxas" imgURL="/assets/img_SimulacaoDeTaxas.svg" imgWidth={225} imgHeight={115}/> : ""}
      {formStep == 1 ? <InputSimulacao/> : ""}
      {formStep == 1 ? <Table/> : ""}

      {formStep == 2 ? <Hero title="Simulação de Taxas" imgURL="/assets/img_SimulacaoDeTaxas.svg" imgWidth={225} imgHeight={115}/> : ""}
      {formStep == 2 ? <InputClient/> : ""}
      {formStep == 2 ? <Table/> : ""}

      <Footer/>
    </>
  )
}

export default Home
