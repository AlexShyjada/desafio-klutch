import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Table from '../components/Table'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Desafio Klutch</title>
      </Head>
      <Hero/>
      <Table/>
    </>
  )
}

export default Home
