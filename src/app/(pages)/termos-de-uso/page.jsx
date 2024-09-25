import React from "react";

import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

export const metadata = {
    title: {
        default: "Termos de Uso",
    },
    description: AppData.settings.siteDescription,
}

const Termos = () => {
  return (
    <>
      <PageBanner pageTitle={"Termos de Uso"} breadTitle={"Termos de Uso"} bgImage={"/img/photo/12.jpg"} />

      {/* Seção de Termos e Condições */}
      <section className="mil-terms-section">
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />
          <div className="row justify-content-between">
            <div className="col-lg-12">
              {/* Título da seção */}
              <div className="mil-mb-90">
                <h2 className="mil-upper mil-up mil-mb-30">Termos de Uso</h2>
                {/* Parágrafo do contrato */}
                <p className="mil-up mil-mb-40">
                  Termos e Condições de Compra e Venda de [empresa + url], com sede na [endereço], doravante denominada
                  simplesmente [empresa + url], e, de outro lado, o cliente [empresa + url], qualificado no momento da
                  compra dos produtos [empresa + url], doravante denominado simplesmente Cliente.
                </p>
                <p className="mil-up mil-mb-40">
                  Considerando que a [empresa + url] realiza venda de produtos e serviços pela internet; Considerando o
                  interesse do Cliente na compra dos produtos oferecidos pela [empresa + url] (“Produtos”) em seus
                  canais de venda; O presente contrato tem por finalidade estabelecer as condições gerais de uso e
                  compra de produtos e serviços do cliente do site [empresa + url].
                </p>

                {/* Seção I - Confidencialidade */}
                <h3 className="mil-upper mil-up mil-mb-20">I. Confidencialidade</h3>
                <p className="mil-up mil-mb-40">
                  É de responsabilidade da [empresa + url] a preservação da confidencialidade de todos os dados e
                  informações fornecidos pelo Cliente no processo de compra. A segurança do site é auditada diariamente
                  e garantida contra a ação de hackers, através do selo de segurança SSL.
                </p>

                {/* Seção II - SAC */}
                <h3 className="mil-upper mil-up mil-mb-20">II. Serviço de Atendimento ao Cliente (SAC)</h3>
                <p className="mil-up mil-mb-40">
                  O cliente dispõe desse serviço para sanar suas dúvidas, solucionar eventuais solicitações ou
                  reclamações a respeito do seu pedido ou de qualquer conteúdo disponibilizado no site. O SAC poderá ser
                  acionado por meio de telefone ou de formulário do site.
                </p>

                {/* Seção III - Política de Entrega */}
                <h3 className="mil-upper mil-up mil-mb-20">III. Política de Entrega</h3>
                <p className="mil-up mil-mb-20">
                  O prazo para entrega dos Produtos é informado durante o procedimento de compra, contabilizado em dias
                  úteis. As entregas dos Produtos são realizadas de segunda a sexta-feira, das 8h às 22h.
                </p>
                <p className="mil-up mil-mb-20">
                  Excepcionalmente, algumas entregas de Produtos podem ocorrer aos sábados, domingos e feriados.
                </p>
                
                <ul className="mil-up mil-mb-40">
                  <li><strong>III.I:</strong> A conferência da adequação das dimensões do produto é de responsabilidade do Cliente...</li>
                  <li><strong>III.II:</strong> Serão realizadas até três tentativas de entrega no local informado...</li>
                  <li><strong>III.III:</strong> Após a finalização do pedido não é possível alterar a forma de pagamento e/ou endereço...</li>
                  <li><strong>III.IV:</strong> O prazo de entrega informado leva em consideração o estoque, a região...</li>
                  <li><strong>III.V:</strong> O valor do frete da entrega é calculado com base no local de entrega, peso e dimensões...</li>
                  <li><strong>III.VI:</strong> A [empresa + url] não autoriza a transportadora a: entrar no domicílio...</li>
                  <li><strong>III.VII:</strong> A [empresa + url] não se responsabiliza pela retenção de mercadorias na SEFAZ...</li>
                </ul>

                {/* Seção IV - Direito de Arrependimento */}
                <h3 className="mil-upper mil-up mil-mb-20">IV. Direito de Arrependimento</h3>
                <p className="mil-up mil-mb-20">
                  Ao Cliente será facultado o exercício do direito de arrependimento da compra, com a finalidade de
                  devolução do Produto...
                </p>

                <ul className="mil-up mil-mb-40">
                  <li><strong>IV.I:</strong> O Cliente deverá solicitar a devolução através do SAC...</li>
                  <li><strong>IV.II:</strong> Após a chegada do produto ao Centro de Distribuição...</li>
                  <li><strong>IV.III:</strong> Em compras com cartão de crédito, a administradora do cartão será notificada...</li>
                  <li><strong>IV.IV:</strong> Em compras pagas com boleto bancário ou débito em conta...</li>
                </ul>

                {/* Contato */}
                <h3 className="mil-upper mil-up mil-mb-30">Fale com o Suporte</h3>
                <p className="mil-up mil-mb-40">
                  Precisa de ajuda? Consulte nosso atendimento para resolver suas dúvidas. Entre em contato por telefone
                  [telefone] ou pelo e-mail [email].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Termos;
