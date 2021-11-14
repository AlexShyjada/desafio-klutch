import {createServer, Model} from 'miragejs'

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
            {
              id: 3,
              installments: 3,
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
            {
              id: 3,
              installments: 3,
              installmentInterest: 20.5,
              installmentValue: 1338.76,
              fullValue: 2677.51,
              comission: 455.51
            },
          ]
        }
      ],
    })
  },
  routes(){
    this.namespace = 'api'

    this.get('/rateTable', () => {
      return this.schema.all('rateTable')
    })
  }
})