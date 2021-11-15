import {createServer, Model} from 'miragejs'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

createServer({
  models: {
    rateTable: Model,
  },

  seeds(server){
    server.db.loadData({
      rateTables: [
        {
          id: 1,
          name: "Tabela 1",
          installments: [
            {
              id: 1,
              installments: 1,
              installmentInterest: 20.5,
              installmentValue: 1338.76,
              fullValue: 2677.51,
              comission: 455.51
            },
            {
              id: 2,
              installments: 2,
              installmentInterest: 20.5,
              installmentValue: 1338.76,
              fullValue: 2677.51,
              comission: 455.51
            },
          ]
        },
        {
          id: 2,
          name: "Tabela 2",
          installments: [
            {
              id: 1,
              installments: 1,
              installmentInterest: 20.5,
              installmentValue: 1338.76,
              fullValue: 2677.51,
              comission: 455.51
            },
            {
              id: 2,
              installments: 2,
              installmentInterest: 20.5,
              installmentValue: 1338.76,
              fullValue: 2677.51,
              comission: 455.51
            },
          ]
        }
      ],
      clients: [
        {
          id: 1,
          name: "Teste Cliente",
          phone: "71991234567",
          cpf: "99999999999",
          bank: {
            label: "003 - Banco da Amazonia S.A.",
            accountTypeLabel: "Conta Corrente",
            accountNumber: "378282246310005"
          },
        },
        {
          id: 2,
          name: "Teste Cliente 2",
          phone: "71991234567",
          cpf: "88888888888",
          bank: {
            label: "001 - Nu Pagamentos S.A.",
            accountTypeLabel: "Conta Corrente",
            accountNumber: "378282246310005"
          },
        },

      ],
      solicitations: []
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/rateTable', () => {
      return this.schema.all('rateTable')
    })

    this.get('/rateTable', () => {
      return this.schema.all('rateTable')
    })

    this.get('/solicitations', () => {
      return this.schema.all('solicitations')
    })
  }
})