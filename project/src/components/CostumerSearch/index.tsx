import { useEffect, useState } from "react";
import { api } from "../../services/api";
import style from "./style.module.scss";

interface IClient {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  bank: {
    label: string;
    accountTypeLabel: string;
    accountNumber: string;
  };
}

export function CostumerSearch() {
  const [clients, setClients] = useState<IClient[]>([]);
  const [clientsFound, setClientsFound] = useState<Number[]>([]);
  const [inputAmount, setInputAmount] = useState("");

  useEffect(() => {
    api.get("clients").then((response) => setClients(response.data.clients));
  }, []);

  function SearchClient() {
    let clientFound = [];

    for (let i = 0; i < clients.length; i++) {
      if (clients[i].cpf === inputAmount) {
        clientFound.push(clients[i].id);
      }
    }

    setClientsFound(clientFound);
  }

  return (
    <>
      <section id="InputSimulacao" className={style.inputSimulacao}>
        <h2>Busque o Cliente</h2>
        <div className={style.inputGroup}>
          <label>
            <input
              id="inputAmount"
              placeholder="Digite o CPF desejado"
              type="string"
              value={inputAmount}
              maxLength={11}
              onChange={(e) => setInputAmount(e.target.value)}
            />
          </label>
          <button onClick={SearchClient}>Buscar</button>
        </div>
      </section>

      {
        clientsFound.length <= 0 ? "" :
        <section className={style.clientInfoContainer}>
          <p>Cliente encontrado:</p>
          <span className={style.cpfInfo}>074.119.055-93</span>
          <span className={style.userName}>Lara Test</span>
          <button onClick={CostumerSearch}>Solicitar</button>
        </section>
      }

    </>
  );
}
