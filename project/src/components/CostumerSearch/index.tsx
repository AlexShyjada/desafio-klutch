import { useEffect, useState, useContext, Dispatch, SetStateAction } from "react";
import { api } from "../../services/api";
import style from "./style.module.scss";
import { LendingContextSolicitation } from "../LendingContext";

interface IClient {
  clientId: number;
  name: string;
  phone: string;
  cpf: string;
  bank: {
    label: string;
    accountTypeLabel: string;
    accountNumber: string;
  };
}

interface ICostumerSearchProps {
  formStep: number;
  setFormStep: Dispatch<SetStateAction<number>>;
}

export function CostumerSearch(props: ICostumerSearchProps) {

  const {formStep, setFormStep} = props

  const [clients, setClients] = useState<IClient[]>([]);
  const [clientsFound, setClientsFound] = useState<IClient[]>([]);
  const [inputAmount, setInputAmount] = useState("");

  const { solicitationData, setSolicitationData } = useContext(
    LendingContextSolicitation
  );

  useEffect(() => {
    api.get("clients").then((response) => setClients(response.data.clients));
  }, []);

  function SearchClient() {
    let clientFound = [] as IClient[];

    for (let i = 0; i < clients.length; i++) {
      if (clients[i].cpf === inputAmount) {
        clientFound.push(clients[i]);
      }
    }

    setClientsFound(clientFound);
  }

  function handleSelectClient(id: number) {
    setSolicitationData((oldState) => {return {...oldState, clientId: id};});
    setFormStep(formStep + 1)
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

        clientsFound.map(client => {
          return(
            <section key={client.clientId} className={style.clientInfoContainer}>
              <p>Cliente encontrado:</p>
              <span className={style.cpfInfo}>{client.cpf}</span>
              <span className={style.userName}>{client.name}</span>
              <button onClick={() => handleSelectClient(client.clientId)}>Solicitar</button>
            </section>
          )
        })

      }

    </>
  );
}
