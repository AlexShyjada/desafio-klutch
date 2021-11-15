import { useState } from 'react'
import style from './style.module.scss'

export function SimulationInput() {
  const [simulationValue, setSimulationValue] = useState(0)

  function handleCreateNewSimulation(){
    if(simulationValue < 300 || simulationValue > 10000)
      alert('digite um valor acima de R$300,00 ou um calor abaixo de R$ 10.000')
  }

  return (
    <section id="InputSimulacao" className={style.inputSimulacao}>
      <h2>Valor Desejado</h2>
      <div className={style.inputGroup}>
        <label>
          <input
            id="inputAmount"
            type="number"
            placeholder="Digite o valor desejado"
            value={simulationValue}
            onChange={(e) => setSimulationValue(Number(e.target.value))}
          />
        </label>
        <button onClick={handleCreateNewSimulation}>Calcular</button>
      </div>
    </section>
  )
}
