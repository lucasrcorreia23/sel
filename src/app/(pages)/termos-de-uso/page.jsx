import React from "react";
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";

export const metadata = {
    title: {
        default: "Termos de Uso",
    },
    description: AppData.settings.siteDescription,
};

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
                {/* Parágrafo introdutório */}
                <p className="mil-up mil-mb-40">
                  Estes Termos de Uso regulam o acesso e uso do site da Sel Consultoria, uma empresa de consultoria financeira com sede na Av. Pedra Branca, 241, Sala 1015, Palhoça - SC, doravante denominada simplesmente Sel Consultoria.
                </p>
                <p className="mil-up mil-mb-40">
                  Ao utilizar nosso site, o usuário concorda com as condições descritas abaixo. Estes termos podem ser atualizados periodicamente, e é responsabilidade do usuário revisá-los antes de utilizar nossos serviços.
                </p>

                {/* Seção I - Confidencialidade */}
                <h3 className="mil-upper mil-up mil-mb-20">I. Confidencialidade</h3>
                <p className="mil-up mil-mb-40">
                  A Sel Consultoria se compromete a preservar a confidencialidade de todos os dados e informações fornecidos pelo usuário em nosso site, conforme as leis aplicáveis de proteção de dados. Utilizamos medidas de segurança adequadas para proteger essas informações, incluindo criptografia SSL.
                </p>

                {/* Seção II - Serviço de Atendimento ao Cliente (SAC) */}
                <h3 className="mil-upper mil-up mil-mb-20">II. Serviço de Atendimento ao Cliente (SAC)</h3>
                <p className="mil-up mil-mb-40">
                  O cliente pode entrar em contato conosco para sanar dúvidas ou solucionar eventuais solicitações relacionadas aos nossos serviços. O SAC está disponível por telefone ou e-mail, conforme informações fornecidas em nosso site.
                </p>

                {/* Seção III - Uso de Serviços */}
                <h3 className="mil-upper mil-up mil-mb-20">III. Uso dos Serviços de Consultoria</h3>
                <p className="mil-up mil-mb-40">
                  Os serviços de consultoria financeira oferecidos pela Sel Consultoria são destinados exclusivamente para orientação profissional e não constituem serviços de venda de produtos físicos ou mercadorias. O cliente é responsável por utilizar as informações e orientações fornecidas de forma consciente e em conformidade com os objetivos de sua empresa.
                </p>

                {/* Seção IV - Limitação de Responsabilidade */}
                <h3 className="mil-upper mil-up mil-mb-20">IV. Limitação de Responsabilidade</h3>
                <p className="mil-up mil-mb-40">
                  A Sel Consultoria não se responsabiliza por decisões financeiras tomadas exclusivamente com base em nossas consultorias. A implementação das orientações oferecidas é de responsabilidade do cliente. Nosso objetivo é fornecer informações para a gestão financeira, mas o sucesso das medidas adotadas depende de vários fatores externos ao nosso controle.
                </p>

                {/* Seção V - Direito de Arrependimento */}
                <h3 className="mil-upper mil-up mil-mb-20">V. Direito de Arrependimento</h3>
                <p className="mil-up mil-mb-40">
                  O cliente tem o direito de solicitar o cancelamento de nossos serviços de consultoria, desde que dentro dos prazos e condições estabelecidos no contrato específico. Para exercer esse direito, entre em contato.
                </p>

                {/* Contato */}
                <h3 className="mil-upper mil-up mil-mb-30">Fale com o Suporte</h3>
                <p className="mil-up mil-mb-40">
                  Precisa de mais informações? Entre em contato com a Sel Consultoria pelo telefone: +55 (48) 9 9989-8020 ou pelo e-mail: atendimento@sel-consultoria.com.
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
