import React, { Suspense } from "react";

import AppData from "@data/app.json";

import { getSortedServicesData } from "@library/services";

import PageBanner from "@components/PageBanner";
import VisionSection from "@components/sections/Vision";
import FeaturesTwoSection from "@components/sections/FeaturesTwo";
import AboutFourSection from "@components/sections/AboutFour";
import CallToActionSection from "@components/sections/CallToAction";
import HeroTwoSlider from "../../_components/sliders/HeroTwo";

import Link from "next/link";

export const metadata = {
  title: {
    default: "Soluções",
  },
  description: AppData.settings.siteDescription,
};

async function Services() {
  const services = await getAllServices();

  return (
    <>
      <HeroTwoSlider />

      {/* services */}
      <section>
        <div className="container mil-p-120-90">
          <div className="mil-background-grid mil-softened" />

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="mil-center mil-mb-120">
                <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                  Imersão integral
                </span>
                <p className="mil-text-lg mil-up">
                  Todas as soluções da SEL Consultoria têm como base a
                  transformação completa da empresa, abordando desde os aspectos
                  estratégicos até as operações mais práticas. Trabalhamos com
                  uma visão holística, atuando em seis áreas essenciais para
                  garantir o crescimento sustentável e a eficiência das
                  organizações, independentemente do tamanho ou setor. A seguir,
                  conheça os pilares que sustentam a nossa metodologia.
                </p>
              </div>
            </div>
          </div>

          <div className="mil-center mil-mb-90">
            <span className="mil-suptitle mil-upper mil-up mil-mb-30">
              Fundamentos
            </span>
            <h2 className="mil-upper mil-up">Nossos pilares</h2>
          </div>
          <div className="mil-contact-frame mil-mb-30">
            <h3 className="mil-upper mil-up mil-mb-60">Base Estratégica</h3>
            <div className="flex row justify-content-between ">
              <div className="col-lg-6">
                <div className="mil-text mil-up" />A SEL atua na construção e
                ajuste da missão, visão e valores da empresa, alinhando
                objetivos de longo prazo com estratégias que atendam às
                expectativas de ganhos e à organização familiar. Através da
                sucessão familiar, estruturação patrimonial, composição
                societária e análise de pontos de deficiência, garantimos que
                sua empresa tenha a direção certa, amparada em controle e
                comando sólidos.
              </div>

              <div className="col-lg-5">
                <ul className="mil-icon-list mil-mb-60">
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Definição de missão, visão e valores
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Sucessão familiar planejada
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Estruturação patrimonial sólida
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Comando e controle estratégico
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mil-contact-frame mil-mb-30">
            <h3 className="mil-upper mil-up mil-mb-60">Administração Financeira</h3>
            <div className="flex row justify-content-between ">
              <div className="col-lg-6">
                <div className="mil-text mil-up" />Otimizamos a rotina administrativa e financeira com foco em gestão de capital de giro, análise de investimentos, controle de fluxo de caixa e orçamento empresarial. Trabalhamos na precificação, controle de custos e estratégias tributárias, além de planejar a distribuição de lucros, valuation e ponto de equilíbrio, garantindo decisões financeiras inteligentes e sustentáveis.
              </div>

              <div className="col-lg-5">
                <ul className="mil-icon-list mil-mb-60">
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Gestão do capital de giro eficiente
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Controle de fluxo de caixa preciso
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Estratégias tributárias otimizadas
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Valuation e precificação clara
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="mil-contact-frame mil-mb-30">
            <h3 className="mil-upper mil-up mil-mb-60">Recursos Humanos</h3>
            <div className="flex row justify-content-between ">
              <div className="col-lg-6">
                <div className="mil-text mil-up" />Nosso suporte em Recursos Humanos abrange desde a criação do organograma até o dimensionamento e recrutamento do quadro de funcionários. Implementamos avaliações de desempenho e políticas de remuneração baseadas em resultados, assegurando a eficiência no crescimento do capital humano.
              </div>

              <div className="col-lg-5">
                <ul className="mil-icon-list mil-mb-60">
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Organograma e dimensionamento assertivo
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Recrutamento e seleção eficaz
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Avaliação de desempenho constante
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Política de remuneração por resultados
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="mil-contact-frame mil-mb-30">
            <h3 className="mil-upper mil-up mil-mb-60">Gestão de Produção & Logística</h3>
            <div className="flex row justify-content-between ">
              <div className="col-lg-6">
                <div className="mil-text mil-up" />Cuidamos de todo o processo produtivo, desde o layout das fábricas até a gestão de estoques e centros de distribuição. Atuamos na qualificação de colaboradores e no controle de qualidade, propondo melhorias em instalações, layouts e fluxos operacionais para otimizar a produção e a logística.
              </div>

              <div className="col-lg-5">
                <ul className="mil-icon-list mil-mb-60">
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Layout produtivo otimizado
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Gestão e controle de estoques
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Ampliação de instalações eficientes
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Qualidade e entregas garantidas
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="mil-contact-frame mil-mb-30">
            <h3 className="mil-upper mil-up mil-mb-60">Marketing & Estrutura de Mercado</h3>
            <div className="flex row justify-content-between ">
              <div className="col-lg-6">
                <div className="mil-text mil-up" />Ajudamos a posicionar sua marca no mercado por meio da análise de concorrentes, estrutura de preços e estratégias de branding. Implementamos estudos de praça e produto, além de promover estratégias de marketing baseadas em pesquisa, visando aumentar o market share e garantir a comunicação eficiente da marca.
              </div>

              <div className="col-lg-5">
                <ul className="mil-icon-list mil-mb-60">
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Análise de concorrentes e mercado
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Posicionamento estratégico da marca
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Estudos de preço e elasticidade
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Aumento de market share
                  </li>
                </ul>
              </div>
            </div>
          </div>

        
          <div className="mil-contact-frame mil-mb-30">
            <h3 className="mil-upper mil-up mil-mb-60">Planejamento de TI</h3>
            <div className="flex row justify-content-between ">
              <div className="col-lg-6">
                <div className="mil-text mil-up" />Estruturamos os processos administrativos para implementar ferramentas tecnológicas que melhoram a gestão empresarial. Criamos centros de custo eficazes, definimos KPI’s e OKR’s e integramos soluções de BI que possibilitam um controle mais apurado e decisões rápidas, além de recomendar a infraestrutura tecnológica ideal para sua operação.

              </div>

              <div className="col-lg-5">
                <ul className="mil-icon-list mil-mb-60">
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Estruturação de processos para ERP
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Criação de centros de custo eficazes
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    Integração de BI e ferramentas de gestão
                  </li>
                  <li className="mil-up">
                    <img src="/img/icons/11.svg" alt="icon" />
                    KPI’s e OKR’s para monitoramento real-time
                  </li>
                </ul>
              </div>
            </div>
          </div>



        </div>
      </section>

      <CallToActionSection />
    </>
  );
}
export default Services;

async function getAllServices() {
  const allServices = getSortedServicesData();
  return allServices;
}
