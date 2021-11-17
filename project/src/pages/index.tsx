import type { NextPage } from "next";
import { useContext, useState } from "react";
import Head from "next/head";
import "../services/api";
import {
  LendingContextSolicitation,
  LendingContextSolicitationProvider,
} from "../components/LendingContext";
import {
  Hero,
  Footer,
  TaxSimulation,
  CreditCardForm,
  CostumerSearch,
  PaymentModality,
} from "../components";

const Home: NextPage = () => {

  const [formStep, setFormStep] = useState(1)

  return (
    <LendingContextSolicitationProvider>
      <Head>
        <title>Desafio Klutch</title>
      </Head>

      {formStep === 1 ? (
        <>
          <Hero
            title="Simulação de Taxas"
            imgURL="/assets/img_SimulacaoDeTaxas.svg"
            imgWidth={225}
            imgHeight={115}
          />
          <TaxSimulation />
          <Footer formStep={formStep} setFormStep={setFormStep} />
        </>
      ) : null}

      {formStep == 2 ? (
        <>
          <Hero
            title="Simulação de Taxas"
            imgURL="/assets/img_SimulacaoDeTaxas.svg"
            imgWidth={225}
            imgHeight={115}
          />
          <CostumerSearch formStep={formStep} setFormStep={setFormStep} />
        </>
      ) : null}

      {formStep == 3 ? (
        <>
          <Hero
            title="Simulação de Taxas"
            imgURL="/assets/img_SimulacaoDeTaxas.svg"
            imgWidth={225}
            imgHeight={115}
          />
          <CreditCardForm formStep={formStep} setFormStep={setFormStep}/>
        </>
      ) : null}

      {formStep == 4 ? (
        <>
          <Hero
            title="Simulação de Taxas"
            imgURL="/assets/img_SimulacaoDeTaxas.svg"
            imgWidth={225}
            imgHeight={115}
          />
          <PaymentModality />
        </>
      ) : null}
    </LendingContextSolicitationProvider>
  );
};

export default Home;
