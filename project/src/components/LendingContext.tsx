import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface ISolicitationData {
  solicitationId: number;
  clientId: number;
  cardName: string;
  cardNumber: number;
  cardMaxDate: string;
  cardCode: number;
  paymentModality: string;
  rateTableId: number;
  installmentId: number;
  desiredValue: number;
  totalLoan: number;
  installments: number;
  installmentInterest: number;
  installmentInterestValue: number;
  comission: number;
  comissionValue: number;
  installmentValue: number;
}

interface IrateTables {
  id: number;
  name: string;
  installments: [
    {
      id: number;
      installments: number;
      installmentInterest: number;
    }
  ];
}

interface ILendingContextSolicitationProviderProps {
  children: ReactNode;
}
interface ICreateContext {
  solicitationData: ISolicitationData;
  setSolicitationData: Dispatch<SetStateAction<ISolicitationData>>;
}

export const LendingContextSolicitation = createContext({} as ICreateContext);

export function LendingContextSolicitationProvider({
  children,
}: ILendingContextSolicitationProviderProps) {

  const InicialValue = {
    solicitationId: 0,
    clientId: 0,
    cardName: '',
    cardNumber: 0,
    cardMaxDate: '',
    cardCode: 0,
    paymentModality: '',
    rateTableId: 0,
    installmentId: 0,
    desiredValue: 0,
    totalLoan: 0,
    installments: 0,
    installmentInterest: 0,
    installmentInterestValue: 0,
    comission: 0,
    comissionValue: 0,
    installmentValue: 0,
  } as ISolicitationData;

  const [solicitationData, setSolicitationData] =
    useState<ISolicitationData>(InicialValue);

  return (
    <LendingContextSolicitation.Provider
      value={{ solicitationData, setSolicitationData}}
    >
      {children}
    </LendingContextSolicitation.Provider>
  );
}
