import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
    title: {
        default: "Contato",
    },
    description: AppData.settings.siteDescription,
}

const Contato = () => {
  return (
    <>
        <PageBanner pageTitle={"Contato"} breadTitle={"Contato"} bgImage={"/img/photo/5619.jpg"} />

        {/* about */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between">
                    <div className="col-lg-6">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">Informações <br/>de contato</h2>
                            <p className="mil-up mil-mb-40">Entre em contato para otimizar a gestão financeira da sua empresa com a SEL Consultoria. Estamos preparados para guiar seu negócio em direção a um crescimento sólido e sustentável.</p>
                        </div>

                    </div>
                    <div className="col-lg-4 mil-relative">

                        <div className="mil-contact-sidebar">
                           

                            <div className="mil-sidebar-info">

                                <h6 className="mil-upper mil-up mil-mb-30">Endereço</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>Brasil</li>
                                    <li>Palhoça - SC</li>
                                    <li>Office Green - Rua da Praça</li>
                                    <li>Av. Pedra Branca, 241</li>
                                    <li>Sala 1015</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">Telefone</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>+55 (48) 9 9989-8020</li>                                   
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">E-mail</h6>
                                <ul className="mil-list mil-dark mil-up">
                                    <li>atendimento@sel-consultoria.com</li>                                   
                                </ul>
                                
                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        </section>
        {/* about end */}

        {/* map */}
        <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.0942942475317!2d-48.68004732485642!3d-27.621596123194724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952735a1350fffff%3A0xcebfe4cc107f3e24!2sSel%20Consultoria!5e0!3m2!1spt-BR!2sbr!4v1726940230510!5m2!1spt-BR!2sbr" 
                    style={{"border": "0"}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
                
            </div>
        </div>
        {/* map end */}

        {/* contact */}
        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">Como podemos lhe ajudar?</h2>
                            <p className="mil-up mil-mb-30">Preencha o formulário ao lado com os detalhes da sua necessidade que logo retornaremos.</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            <p className="mil-up mil-mb-30">Nos acompanhe nas redes sociais e fique por dentro de conteúdos empresariais exclusivos.</p>
                            <div className="mil-up mb-30">
                                <Link href="https://br.linkedin.com/company/selconsultoria" className="mil-link mil-upper">Linkedin</Link>
                                
                            </div>
                            <div className="mil-up mb-30">
                            <Link href="https://www.instagram.com/selconsultoria" className="mil-link mil-upper">Instagram </Link>
                                
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <ContactForm />

                    </div>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default Contato;
