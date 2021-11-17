import {createServer, Model} from 'miragejs'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

createServer({
  models: {
    rateTables: Model,
    clients: Model,
    solicitations: Model,
  },

  seeds(server){
    server.db.loadData({
      rateTables: [
        {
          clientId: 1,
          name: "Tabela 1",
          installments: [
            {
              id: 1,
              installments: 1,
              installmentInterest: 10,
            },
            {
              id: 2,
              installments: 2,
              installmentInterest: 20,
            },
          ]
        },
        {
          id: 2,
          name: "Tabela 2",
          installments: [
            {
              id: 3,
              installments: 1,
              installmentInterest: 15,
            },
            {
              id: 4,
              installments: 2,
              installmentInterest: 25,
            },
          ]
        }
      ],
      clients: [
        {
          clientId: 1,
          name: "Teste Cliente",
          phone: "71991234567",
          cpf: "11111111111",
          bank: {
            label: "003 - Banco da Amazonia S.A.",
            accountTypeLabel: "Conta Corrente",
            accountNumber: "378282246310005"
          },
        },
        {
          clientId: 2,
          name: "Teste Cliente 2",
          phone: "71991234567",
          cpf: "22222222222",
          bank: {
            label: "001 - Nu Pagamentos S.A.",
            accountTypeLabel: "Conta Corrente",
            accountNumber: "378282246310005"
          },
        },
        {
          clientId: 3,
          name: "Teste Cliente 3",
          phone: "71991234567",
          cpf: "33333333333",
          bank: {
            label: "001 - Nu Pagamentos S.A.",
            accountTypeLabel: "Conta Corrente",
            accountNumber: "378282246310005"
          },
        },
        {
          clientId: 4,
          name: "Teste Cliente 4",
          phone: "71991234567",
          cpf: "44444444444",
          bank: {
            label: "001 - Nu Pagamentos S.A.",
            accountTypeLabel: "Conta Corrente",
            accountNumber: "378282246310005"
          },
        },
        {
          clientId: 5,
          name: "Teste Cliente 5",
          phone: "71991234567",
          cpf: "55555555555",
          bank: {
            label: "001 - Nu Pagamentos S.A.",
            accountTypeLabel: "Conta Corrente",
            accountNumber: "378282246310005"
          },
        },
        {
          clientId: 6,
          name: "Teste Cliente 6",
          phone: "71991234567",
          cpf: "66666666666",
          bank: {
            label: "001 - Nu Pagamentos S.A.",
            accountTypeLabel: "Conta Corrente",
            accountNumber: "378282246310005"
          },
        },
        {
          clientId: 7,
          name: "Teste Cliente 7",
          phone: "71991234567",
          cpf: "77777777777",
          bank: {
            label: "001 - Nu Pagamentos S.A.",
            accountTypeLabel: "Conta Corrente",
            accountNumber: "378282246310005"
          },
        },
        {
          clientId: 8,
          name: "Teste Cliente 8",
          phone: "71991234567",
          cpf: "88888888888",
          bank: {
            label: "001 - Nu Pagamentos S.A.",
            accountTypeLabel: "Conta Corrente",
            accountNumber: "378282246310005"
          },
        },
        {
          clientId: 9,
          name: "Teste Cliente 9",
          phone: "71991234567",
          cpf: "99999999999",
          bank: {
            label: "001 - Nu Pagamentos S.A.",
            accountTypeLabel: "Conta Corrente",
            accountNumber: "378282246310005"
          },
        },
        {
          clientId: 10,
          name: "Teste Cliente 10",
          phone: "71991234567",
          cpf: "99999999999",
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

    this.get('/rateTables', () => {
      return this.schema.all('rateTables')
    })

    this.get('/clients', () => {
      return this.schema.all('clients')
    })

    this.get('/solicitations', () => {
      return this.schema.all('solicitations')
    })
  }
})