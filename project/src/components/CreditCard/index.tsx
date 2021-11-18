import { useState, useContext, Dispatch, SetStateAction } from "react";
import { LendingContextSolicitation } from "..";
import style from "./style.module.scss";

interface ICostumerSearchProps {
  formStep: number;
  setFormStep: Dispatch<SetStateAction<number>>;
}

export function CreditCardForm(props: ICostumerSearchProps) {
  const { formStep, setFormStep } = props;

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState(0);
  const [cardMaxDate, setCardMaxDate] = useState("");
  const [cardCode, setCardCode] = useState(0);

  const { setSolicitationData } = useContext(LendingContextSolicitation);

  function handleSetCardInformationOnContext() {
    if (
      cardName.length <= 2 ||
      cardNumber <= 3000000000000000 ||
      cardMaxDate.length < 5 ||
      cardMaxDate.length > 5 ||
      cardCode <= 10 
    ) {
      alert("certifique-se que preencheu todos os dados corretamente");
      return
    } 
    
    else {
      setSolicitationData((oldState) => {
        return {
          ...oldState,
          cardName: cardName,
          cardNumber: cardNumber,
          cardMaxDate: cardMaxDate,
          cardCode: cardCode,
        };
      });
      setFormStep(formStep + 1);
    }
  }

  return (
    <section
      id="CreditCardForm"
      className={`${style.creditCardForm} container`}
    >
      <form>
        <div className="formCollum">
          <div className="inputGroup">
            <p>Insira os dados do cartão</p>
            <label>
              Nome impresso no cartão
              <input
                id="cardName"
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="Ex. Alexandre S Sousa"
              />
            </label>
          </div>
          <div className="inputGroup">
            <label>
              Número impresso no cartão
              <input
                id="cardNumber"
                type="number"
                value={cardNumber}
                maxLength={16}
                onChange={(e) => setCardNumber(Number(e.target.value))}
                placeholder="Ex. 5000 5000 5000 5000"
              />
            </label>
          </div>
          <div className="inputGroup">
            <label>
              Data de validade do cartão
              <input
                id="cardMaxDate"
                type="text"
                value={cardMaxDate}
                onChange={(e) => setCardMaxDate(e.target.value)}
                placeholder="Ex. 09/10"
              />
            </label>
          </div>
          <div className="inputGroup">
            <label>
              Código de segurança do cartão
              <input
                id="cardCode"
                type="number"
                value={cardCode}
                maxLength={3}
                onChange={(e) => setCardCode(Number(e.target.value))}
                placeholder="Ex. 123"
              />
            </label>
          </div>
        </div>
        <div className="formCollum">
          <p>Faça o upload dos anexos do cartão:</p>
          <div className="inputGroup">
            <label>
              Cartão de Crédito (Frente)
              <input
                id="cardImgFront"
                className={style.cardImgFront}
                type="file"
                disabled
                placeholder="Ex. Alexandre S Sousa"
              />
            </label>
          </div>
          <div className="inputGroup">
            <label>
              Cartão de Crédito (Verso)
              <input
                id="cardImgBack"
                className={style.cardImgBack}
                type="file"
                disabled
              />
            </label>
          </div>
          <div className="inputGroup">
            <label>
              Selfie com cartão de crédito
              <input
                id="cardSelfie"
                className={style.cardSelfie}
                type="file"
                disabled
              />
            </label>
          </div>
          <p>
            Atenção: As fotos devem estar legíveis, com todas as informações
            visíveis do cartão.
          </p>
        </div>
      </form>

      <button onClick={handleSetCardInformationOnContext}>Continuar</button>
    </section>
  );
}
