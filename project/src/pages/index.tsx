import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import "../services/api";
import { LendingContextSolicitationProvider,} from "../components/LendingContext";
import {
  Hero,
  Footer,
  TaxSimulation,
  CreditCardForm,
  CostumerSearch,
  PaymentModality,
  ReviewOfInstallmentValue,
  SolicitationResume,
  SolicitationDetails,
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
          <PaymentModality formStep={formStep} setFormStep={setFormStep}/>
        </>
      ) : null}

      {formStep == 5 ? (
        <>
          <Hero
            title="Simulação de Taxas"
            imgURL="/assets/img_SimulacaoDeTaxas.svg"
            imgWidth={225}
            imgHeight={115}
          />
          <ReviewOfInstallmentValue formStep={formStep} setFormStep={setFormStep}/>
        </>
      ) : null}

      {formStep == 6 ? (
        <>
          <Hero
            title="Simulação de Taxas"
            imgURL="/assets/img_SimulacaoDeTaxas.svg"
            imgWidth={225}
            imgHeight={115}
          />
          <SolicitationResume formStep={formStep} setFormStep={setFormStep}/>
        </>
      ) : null}

      {formStep == 7 ? (
        <>
          <Hero
            title="Detalhe de Solicitação"
            imgURL="/assets/img_DetalhesDaSolicitação.svg"
            imgWidth={115}
            imgHeight={115}
          />
          <SolicitationDetails formStep={formStep} setFormStep={setFormStep}/>
        </>
      ) : null}
    </LendingContextSolicitationProvider>
  );
};

export default Home;
