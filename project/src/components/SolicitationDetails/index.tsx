import { Dispatch, SetStateAction } from "react";
import Image from 'next/image'
import style from './style.module.scss'

interface ISolicitationResumeProps {
  formStep: number;
  setFormStep: Dispatch<SetStateAction<number>>;
}

export function SolicitationDetails(props:  ISolicitationResumeProps) {

  const {formStep, setFormStep} = props

  return (
    <section className={`${style.solicitationDetails} container`}>
      <div className={style.leftCollum}>
        <p>Solicitação gerada por <strong>Sistema Credfica</strong></p>
        <div className={style.infoContainer}>
          <div>
            <span>Valor Total</span>
            <span className={style.value}>6.000,00</span>
          </div>

          <div>
            <span>Valor a depositar</span>
            <span className={style.value}>6.000,00</span>
          </div>

          <div className={style.viewImg}>
            <span>Frente do cartão</span>
            <Image
              src="/assets/img_ArquivoCarregado.svg"
              alt="Frente do cartão"
              width={78}
              height={102}
            />
            <a>Ver Comprovante</a>
          </div>

          <div className={style.viewImg}>
            <span>Verso do cartão</span>
            <Image
              src="/assets/img_ArquivoCarregado.svg"
              alt="Verso do cartão"
              width={78}
              height={102}
            />
            <a>Ver Comprovante</a>
          </div>

          <div className={style.viewImg}>
            <span>Selfie com cartão</span>
            <Image
              src="/assets/img_ArquivoCarregado.svg"
              alt="Selfie com cartão"
              width={78}
              height={102}
            />
            <a>Ver Comprovante</a>
          </div>
        </div>
      </div>
      <div className={style.rightCollum}>
        <p>Fluxo da Solicitação: <strong>Manual</strong></p>
        <div className={style.modalidade}>
          <span className={style.title}>Modalidade:</span>
          <span>Cartão de Crédito</span>
          <span>Número do cartão: 5252 0565 6526 6552</span>
          <span>Validade: 03/27</span>
          <span>CVC: 254</span>
          <span>1 parcelas de: <strong className={style.value}>R$ 2000,00</strong></span>
          <span>Tabela: Tabela padrão</span>
        </div>
        <div className={style.clientInfo}>
          <span className={style.title}>Informações do Cliente:</span>
          <span>Nome: Lara B Esquivel</span>
          <span>CPF: 866.666.965.87</span>
          <span>Agência: 1235</span>
          <span>Banco: 029 - Banco Itaú Consignado S.A.</span>
          <span>Tipo de Conta: Poupança</span>
          <span>Número da conta: 222245</span>
        </div>
        <div className={style.buttonGroup}>
          <span className={style.title}>Informações Gerais:</span>
          <span className={style.date}>Data: 09/03/2020</span>
          <button className={style.aguardando}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.973 3.46993e-07C10.4072 0.000198125 7.89913 0.761221 5.76586 2.18683C3.63259 3.61244 1.96997 5.63862 0.988223 8.00914C0.00648052 10.3797 -0.250287 12.9881 0.250392 15.5045C0.751071 18.021 1.98671 20.3324 3.80105 22.1467C5.6154 23.9609 7.92697 25.1963 10.4435 25.6968C12.9599 26.1973 15.5683 25.9403 17.9388 24.9584C20.3092 23.9765 22.3353 22.3137 23.7607 20.1803C25.1862 18.0469 25.947 15.5388 25.947 12.973C25.9473 11.2692 25.6119 9.58205 24.9599 8.00791C24.308 6.43377 23.3523 5.00348 22.1475 3.79876C20.9427 2.59404 19.5124 1.63849 17.9382 0.986691C16.364 0.334888 14.6768 -0.000393736 12.973 3.46993e-07ZM19.616 9.387L11.277 17.764H11.271C11.0798 17.9631 10.8222 18.0852 10.547 18.107C10.2669 18.0866 10.0055 17.9591 9.817 17.751L6.324 14.258C6.30029 14.2348 6.28146 14.2071 6.2686 14.1766C6.25574 14.146 6.24912 14.1132 6.24912 14.08C6.24912 14.0468 6.25574 14.014 6.2686 13.9834C6.28146 13.9529 6.30029 13.9252 6.324 13.902L7.434 12.792C7.45651 12.7684 7.48358 12.7496 7.51358 12.7367C7.54357 12.7239 7.57587 12.7172 7.6085 12.7172C7.64113 12.7172 7.67343 12.7239 7.70342 12.7367C7.73342 12.7496 7.76049 12.7684 7.783 12.792L10.552 15.561L18.163 7.9C18.1857 7.8765 18.2129 7.85776 18.2429 7.84488C18.273 7.83201 18.3053 7.82525 18.338 7.825C18.3709 7.82402 18.4036 7.83022 18.4338 7.84317C18.464 7.85613 18.491 7.87552 18.513 7.9L19.6 9.025C19.6261 9.04691 19.6473 9.074 19.6624 9.10455C19.6775 9.13511 19.686 9.16845 19.6875 9.20248C19.689 9.23652 19.6834 9.27049 19.6711 9.30225C19.6588 9.33401 19.64 9.36287 19.616 9.387V9.387Z" fill="white"/>
            </svg>

            Aguardando
          </button>
          <button className={style.preAprovar}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.092 4.13688e-08C9.70039 -0.000197743 7.36242 0.708818 5.37377 2.03738C3.38512 3.36595 1.8351 5.25439 0.919736 7.4639C0.00436795 9.6734 -0.235234 12.1047 0.231225 14.4504C0.697685 16.7961 1.84925 18.9508 3.54031 20.642C5.23137 22.3332 7.38596 23.4849 9.7316 23.9516C12.0772 24.4182 14.5086 24.1788 16.7182 23.2636C18.9278 22.3485 20.8163 20.7986 22.1451 18.8101C23.4738 16.8215 24.183 14.4836 24.183 12.092C24.1738 8.88801 22.897 5.81788 20.6315 3.55222C18.366 1.28655 15.296 0.00949807 12.092 4.13688e-08V4.13688e-08ZM13.492 18.138H10.7V15.812H13.49L13.492 18.138ZM13.492 13.022H10.7V5.581H13.49L13.492 13.022Z" fill="white"/>
            </svg>
            Pré Aprovar
          </button>
          <button className={style.reprovar}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.973 3.46993e-07C10.4072 0.000198125 7.89913 0.761221 5.76586 2.18683C3.63259 3.61244 1.96997 5.63862 0.988223 8.00914C0.00648052 10.3797 -0.250287 12.9881 0.250392 15.5045C0.751071 18.021 1.98671 20.3324 3.80105 22.1467C5.6154 23.9609 7.92697 25.1963 10.4435 25.6968C12.9599 26.1973 15.5683 25.9403 17.9388 24.9584C20.3092 23.9765 22.3353 22.3137 23.7607 20.1803C25.1862 18.0469 25.947 15.5388 25.947 12.973C25.9473 11.2692 25.6119 9.58205 24.9599 8.00791C24.308 6.43377 23.3523 5.00348 22.1475 3.79876C20.9427 2.59404 19.5124 1.63849 17.9382 0.986691C16.364 0.334888 14.6768 -0.000393736 12.973 3.46993e-07ZM19.616 9.387L11.277 17.764H11.271C11.0798 17.9631 10.8222 18.0852 10.547 18.107C10.2669 18.0866 10.0055 17.9591 9.817 17.751L6.324 14.258C6.30029 14.2348 6.28146 14.2071 6.2686 14.1766C6.25574 14.146 6.24912 14.1132 6.24912 14.08C6.24912 14.0468 6.25574 14.014 6.2686 13.9834C6.28146 13.9529 6.30029 13.9252 6.324 13.902L7.434 12.792C7.45651 12.7684 7.48358 12.7496 7.51358 12.7367C7.54357 12.7239 7.57587 12.7172 7.6085 12.7172C7.64113 12.7172 7.67343 12.7239 7.70342 12.7367C7.73342 12.7496 7.76049 12.7684 7.783 12.792L10.552 15.561L18.163 7.9C18.1857 7.8765 18.2129 7.85776 18.2429 7.84488C18.273 7.83201 18.3053 7.82525 18.338 7.825C18.3709 7.82402 18.4036 7.83022 18.4338 7.84317C18.464 7.85613 18.491 7.87552 18.513 7.9L19.6 9.025C19.6261 9.04691 19.6473 9.074 19.6624 9.10455C19.6775 9.13511 19.686 9.16845 19.6875 9.20248C19.689 9.23652 19.6834 9.27049 19.6711 9.30225C19.6588 9.33401 19.64 9.36287 19.616 9.387V9.387Z" fill="white"/>
            </svg>
            Reprovar
          </button>
        </div>
      </div>
    </section>
  )
}
