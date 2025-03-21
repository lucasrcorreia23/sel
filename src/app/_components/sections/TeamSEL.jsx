import Link from "next/link";
import React, { Suspense } from "react";

const TeamSEL = () => {
  return (
    <>
      {/* team */}
      <section className="mil-soft-bg mil-team-member-wrapper pt-3 ">
        <div className="container mil-p-0-60">
          <div className="mil-team-member-frame">
            <div className="mil-left-side">
              <div className="mil-member-portrait">
                <img src="/img/other/2.jpg" alt="Professor Luiz Henrique" />
              </div>
            </div>
            <div className="mil-right-side">
              <div className="mil-p-30-30">
                <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                  Sócio Fundador
                </span>
                <h3 className="mil-upper mil-up mil-mb-30">
                  Quem é o Professor Luiz Henrique?
                </h3>
                

                <div className="mil-divider-lg mil-up mil-mb-30" />
                <div className="mil-up mil-text mil-text-sm mil-mb-30">
                Natural de Florianópolis, um pai apaixonado por sua família, amante de churrasco, carros antigos e aviações. Como um bom leonino, um homem criterioso e que busca resultados de excelência nos negócios. <br/><br/>
                
                Empresário do ramo de logística e cadeia de suprimentos, operando obras de relevância nacional e empresas multinacionais. Experiência de 18 anos como consultor empresarial e finanças pessoais, em empresas sediadas no Brasil e no exterior. <br/><br/>
                
                Atua como professor há mais de 16 anos nas áreas de finanças e economia, gestão empresarial e estratégia, produção, logística e qualidade, lecionando nas principais universidades de Santa Catarina. Hoje, leciona em programas de pós-graduação na área de administração e finanças.
                </div>

                <ul className="mil-hori-list mil-dark mil-up mil-mb-30">
                           
                            <li> <a href="https://www.linkedin.com/in/luiz-henrique-debei-herling-ab446597?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">Linkedin</a></li>
                            <li> <a href="https://www.instagram.com/professorluizh?igsh=MTk5ZnVkb2tlNnptZw==" target="_blank">Instagram</a></li>
                          
                        </ul>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team member end */}




      {/* team */}
      <section className="mil-soft-bg mil-team-member-wrapper pt-3">
        <div className="container mil-p-0-60  mil-mb-60">
          <div className="mil-team-member-frame">
            <div className="mil-left-side">
              <div className="mil-p-30-30">
                <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                Sócia Fundadora
                </span>
                <h3 className="mil-upper mil-up mil-mb-30">
                Quem é Camila Dutra?
                </h3>

                <div className="mil-divider-lg mil-up mil-mb-30" />
                <div className="mil-up mil-text mil-text-sm mil-mb-30">
                Natural de Florianópolis, mulher que ama cuidar das empresas sem esquecer que também cuida de uma casa e de uma família. Literalmente apaixonada pelo que faz!<br/><br/>

                Especializada em gestão de pessoas e finanças pessoais, pesquisou e estudou a gestão de fluxo de caixa e a rotina das organizações. Participou, publicou e apresentou trabalhos científicos em revistas e congressos nacionais e internacionais.

<br/><br/>
Atua como consultora de empresas há mais de 10 anos, possuindo vasta experiência no ambiente de gestão familiar de empresas, sucessão e rotina administrativa.

                </div>
                <ul className="mil-hori-list mil-dark mil-up mil-mb-30">
                           
                           <li> <a href="https://www.linkedin.com/in/consultoracamilasdutra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">Linkedin</a></li>
                           <li> <a href="https://www.instagram.com/camilacsd/?igshid=NDc0ODY0MjQ%3D" target="_blank">Instagram</a></li>
                         
                       </ul>
                
              </div>
            </div>
            <div className="mil-right-side">
              <div className="mil-member-portrait">
                <img src="/img/other/1.jpg" alt="Camila Dutra" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team member end */}
    </>
  );
};
export default TeamSEL;
