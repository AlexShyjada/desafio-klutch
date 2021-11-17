import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

interface ISolicitationData {
  solicitationId: number;
  clientId: number;
  installmentInterest: number;
  installmentInterestValue: number;
  comission: number;
  comissionValue: number;
  installmentValue: number;
  cardNumber: string;
  desiredValue: number;
  totalLoan: number;
  rateTableId: number;
  installmentId: number;
}

interface ILendingContextSolicitationProviderProps{
  children: ReactNode;
}
interface ICreateContext{
  solicitationData: ISolicitationData;
  setSolicitationData: Dispatch<SetStateAction<ISolicitationData>>;
}

export const LendingContextSolicitation = createContext({} as ICreateContext)

export function LendingContextSolicitationProvider({children}: ILendingContextSolicitationProviderProps){
  
  const InicialValue = {
    solicitationId: 0,
    clientId: 0,
    installmentInterest: 0,
    installmentInterestValue: 0,
    comission: 0,
    comissionValue: 0,
    installmentValue: 0,
    cardNumber: '',
    desiredValue: 0,
    totalLoan: 0,
    rateTableId: 0,
    installmentId: 0,
  } as ISolicitationData
  
  const [solicitationData, setSolicitationData] = useState<ISolicitationData>(InicialValue)
  
  // 

  return (
    <LendingContextSolicitation.Provider value={{solicitationData, setSolicitationData}}>
      {children}
    </LendingContextSolicitation.Provider>
  )
}