import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface ISolicitationData {
  id: number;
  clientId: number;
  installmentInterest: number;
  installmentInterestValue: number;
  comission: number;
  comissionValue: number;
  installmentValue: number;
  cardNumber: string;
  desiredValue: number;
  totalLoan: number;
  installmentId: number;
  rateTableId: number;
}

interface ILendingContextSolicitationProviderProps{
  children: ReactNode;
}

export const LendingContextSolicitation = createContext({})


export function LendingContextSolicitationProvider({children}: ILendingContextSolicitationProviderProps){

  return (
    <LendingContextSolicitation.Provider value={{}}>
      {children}
    </LendingContextSolicitation.Provider>
  )
}