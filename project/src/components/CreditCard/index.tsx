import style from "./style.module.scss";

export function CreditCardForm() {
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
                placeholder="Ex. Alexandre S Sousa"
              />
            </label>
          </div>
          <div className="inputGroup">
            <label>
              Número impresso no cartão
              <input
                id="cardNumber"
                type="text"
                placeholder="Ex. 5000 5000 5000 5000"
              />
            </label>
          </div>
          <div className="inputGroup">
            <label>
              Data de validade do cartão
              <input id="cardMaxDate" type="text" placeholder="Ex. 09/10" />
            </label>
          </div>
          <div className="inputGroup">
            <label>
              Código de segurança do cartão
              <input id="cardCode" type="text" placeholder="Ex. 123" />
            </label>
          </div>
        </div>
        <div className="formCollum">
          <p>Faça o upload dos anexos do cartão:</p>
          <div className="inputGroup">
            <label>
              Cartão de Crédito (Frente)
              <input
                id="cardName"
                type="file"
                placeholder="Ex. Alexandre S Sousa"
              />
            </label>
          </div>
          <div className="inputGroup">
            <label>
              Cartão de Crédito (Verso)
              <input
                id="cardName"
                type="file"
                placeholder="Ex. Alexandre S Sousa"
              />
            </label>
          </div>
          <div className="inputGroup">
            <label>
              Selfie com cartão de crédito
              <input
                id="cardName"
                type="file"
                aria-label="File browser example"
                placeholder="Ex. Alexandre S Sousa"
              />
            </label>
          </div>
          <p>
            Atenção: As fotos devem estar legíveis, com todas as informações
            visíveis do cartão.
          </p>
        </div>
      </form>
    </section>
  );
}
