import React from "react";
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";

export const metadata = {
    title: {
        default: "Políticas de Privacidade",
    },
    description: AppData.settings.siteDescription,
};

const Privacidade = () => {
  return (
    <>
      <PageBanner 
        pageTitle={"Políticas de Privacidade"} 
        breadTitle={"Políticas de Privacidade"} 
        bgImage={"/img/photo/11.jpg"} 
      />

      {/* Seção de Políticas de Privacidade */}
      <section className="mil-terms-section">
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />
          <div className="row justify-content-between">
            <div className="col-lg-12">
              
              {/* Título principal */}
              <div className="mil-mb-90">
                <h2 className="mil-upper mil-up mil-mb-30">Políticas de Privacidade</h2>
                <p className="mil-up mil-mb-40">Esta política é válida a partir de 25/09/2024.</p>

                {/* Parágrafos principais */}
                <p className="mil-up mil-mb-40">
                  A <strong>SEL Consultoria</strong>, pessoa jurídica de direito privado especializada em consultoria financeira para grandes empresas, leva sua privacidade a sério e zela pela segurança e proteção de dados de todos os seus clientes, parceiros e usuários do site <strong><a href="https://consultoriasel.com/">https://consultoriasel.com/</a></strong>.
                </p>

                <p className="mil-up mil-mb-40">
                  Esta Política de Privacidade destina-se a informá-lo sobre o modo como utilizamos e divulgamos informações coletadas durante sua interação com nossos serviços e em comunicações trocadas conosco.
                </p>

                <p className="mil-up mil-mb-40">
                  Esta Política de Privacidade aplica-se a informações coletadas por meio de nosso site e quaisquer outros canais oficiais de comunicação.
                </p>

                <p className="mil-up mil-mb-40 highlight">
                  AO ACESSAR O SITE DA SEL CONSULTORIA, ENVIAR COMUNICAÇÕES OU FORNECER QUALQUER TIPO DE DADO PESSOAL, VOCÊ DECLARA ESTAR CIENTE E DE ACORDO COM OS TERMOS AQUI PREVISTOS E COM NOSSA POLÍTICA DE PRIVACIDADE, A QUAL DESCREVE AS FINALIDADES E FORMAS DE TRATAMENTO DE SEUS DADOS PESSOAIS.
                </p>

                {/* Definições */}
                <h3 className="mil-upper mil-up mil-mb-20">Seção 1 – Definições</h3>
                <ul className="mil-up mil-mb-40">
                  <li>
                    <strong>Dados Pessoais</strong>: qualquer informação que, direta ou indiretamente, identifique ou possa identificar uma pessoa natural, como nome, CPF, dados financeiros, endereço IP, etc.
                  </li>
                  <li>
                    <strong>Dados Pessoais Sensíveis</strong>: informações que revelem, em relação a uma pessoa natural, origem racial ou étnica, convicções religiosas, dados financeiros ou informações sobre seu patrimônio.
                  </li>
                  <li>
                    <strong>Tratamento de Dados Pessoais</strong>: qualquer operação efetuada com dados pessoais, como coleta, armazenamento, consulta, análise, entre outros.
                  </li>
                  <li>
                    <strong>Leis de Proteção de Dados</strong>: disposições legais que regulam o tratamento de dados pessoais, incluindo a Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/18.
                  </li>
                </ul>

                {/* Uso de Dados Pessoais */}
                <h3 className="mil-upper mil-up mil-mb-20">Seção 2 – Uso de Dados Pessoais</h3>
                <p className="mil-up mil-mb-40">
                  Coletamos e usamos dados pessoais para gerenciar nosso relacionamento com você e oferecer uma experiência personalizada e aprimorada. Exemplos de usos incluem:
                </p>
                <ul className="mil-up mil-mb-40">
                  <li>Prestação de serviços de consultoria financeira;</li>
                  <li>Gerenciamento de projetos e execução de serviços contratados;</li>
                  <li>Personalização de soluções financeiras de acordo com as necessidades do cliente;</li>
                  <li>Comunicação sobre nossas atividades e ofertas;</li>
                  <li>Contatar clientes e parceiros por meio de canais fornecidos, como e-mail e telefone.</li>
                </ul>

                {/* Seções seguintes */}
                <h3 className="mil-upper mil-up mil-mb-20">Seção 3 – Não fornecimento de Dados Pessoais</h3>
                <p className="mil-up mil-mb-40">
                  O fornecimento de seus dados pessoais é opcional. No entanto, a ausência de certos dados poderá impedir a prestação de serviços adequados ou limitar nossa comunicação.
                </p>

                <h3 className="mil-upper mil-up mil-mb-20">Seção 4 – Dados coletados</h3>
                <p className="mil-up mil-mb-40">
                  Coletamos dados como nome, informações financeiras, dados de contato, e outras informações necessárias para a prestação de nossos serviços de consultoria financeira.
                </p>

                <h3 className="mil-upper mil-up mil-mb-20">Seção 5 – Compartilhamento de Dados Pessoais com terceiros</h3>
                <p className="mil-up mil-mb-40">
                  Os dados poderão ser compartilhados com parceiros estratégicos, fornecedores e prestadores de serviços para garantir a execução adequada dos serviços contratados.
                </p>

                <h3 className="mil-upper mil-up mil-mb-20">Seção 6 – Transferências internacionais de dados</h3>
                <p className="mil-up mil-mb-40">
                  Os dados pessoais coletados poderão ser transferidos para parceiros localizados em outros países, sempre de acordo com as disposições legais aplicáveis e com esta Política de Privacidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacidade;
