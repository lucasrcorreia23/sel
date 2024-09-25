import React from "react";
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

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
                <p>Esta política é válida a partir de [data atual].</p>

                {/* Parágrafos principais */}
                <p>
                  <strong>[empresa + url]</strong>, pessoa jurídica de direito privado, leva sua privacidade a sério e zela pela segurança e proteção de dados de todos os seus clientes, parceiros, fornecedores e usuários do site domínio <strong>[url]</strong> e qualquer outro site, loja ou aplicativo operado pelo lojista.
                </p>

                <p>
                  Esta Política de Privacidade destina-se a informá-lo sobre o modo como utilizamos e divulgamos informações coletadas em suas visitas à nossa loja e em mensagens que trocamos com você.
                </p>

                <p>
                  Esta Política de Privacidade aplica-se somente a informações coletadas por meio da loja.
                </p>

                <p className="highlight">
                  AO ACESSAR A LOJA, ENVIAR COMUNICAÇÕES OU FORNECER QUALQUER TIPO DE DADO PESSOAL, VOCÊ DECLARA ESTAR CIENTE E DE ACORDO COM OS TERMOS AQUI PREVISTOS E COM A POLÍTICA DE PRIVACIDADE, A QUAL DESCREVE AS FINALIDADES E FORMAS DE TRATAMENTO DE SEUS DADOS PESSOAIS.
                </p>

                {/* Definições */}
                <h3>Seção 1 – Definições</h3>
                <ul>
                  <li>
                    <strong>Dados Pessoais</strong>: qualquer informação que, direta ou indiretamente, identifique ou possa identificar uma pessoa natural, como nome, CPF, data de nascimento, endereço IP, etc.
                  </li>
                  <li>
                    <strong>Dados Pessoais Sensíveis</strong>: informação que revele, em relação a uma pessoa natural, origem racial ou étnica, convicção religiosa, opinião política, entre outros.
                  </li>
                  <li>
                    <strong>Tratamento de Dados Pessoais</strong>: qualquer operação efetuada com dados pessoais, como coleta, gravação, armazenamento, adaptação, consulta, entre outros.
                  </li>
                  <li>
                    <strong>Leis de Proteção de Dados</strong>: disposições legais que regulam o tratamento de dados pessoais, incluindo a Lei nº 13.709/18 (LGPD).
                  </li>
                </ul>

                {/* Uso de Dados Pessoais */}
                <h3>Seção 2 – Uso de Dados Pessoais</h3>
                <p>
                  Coletamos e usamos dados pessoais para gerenciar seu relacionamento conosco e melhor atendê-lo, personalizando e aprimorando sua experiência na loja. Exemplos de usos incluem:
                </p>
                <ul>
                  <li>Facilitar a compra de produtos e serviços;</li>
                  <li>Confirmar ou corrigir suas informações;</li>
                  <li>Enviar informações de seu interesse;</li>
                  <li>Personalizar sua experiência de uso da loja;</li>
                  <li>Entrar em contato por meio de telefone ou e-mail fornecidos por você.</li>
                </ul>

                {/* Seções seguintes */}
                <h3>Seção 3 – Não fornecimento de Dados Pessoais</h3>
                <p>Não há obrigatoriedade em compartilhar seus dados pessoais. No entanto, se você optar por não os compartilhar, algumas funcionalidades da loja poderão ser limitadas.</p>

                <h3>Seção 4 – Dados coletados</h3>
                <p>Podemos coletar dados como nome, endereço, telefone, e informações sobre sua navegação na loja, como localização e preferências de produtos/serviços.</p>

                <h3>Seção 5 – Compartilhamento de Dados Pessoais com terceiros</h3>
                <p>Os dados poderão ser compartilhados com provedores de serviço, parceiros ou em casos de reorganização empresarial.</p>

                <h3>Seção 6 – Transferências internacionais de dados</h3>
                <p>Os dados pessoais coletados podem ser transferidos para entidades localizadas globalmente, de acordo com esta Política de Privacidade.</p>

                {/* Mais seções podem ser formatadas de forma semelhante */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default Privacidade;
