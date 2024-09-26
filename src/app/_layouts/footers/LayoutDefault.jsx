"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
    {/* footer */}
    <footer className="mil-relative">
        <img src="/img/photo/4.jpg" className="mil-bg-img mil-parallax" alt="image" style={{"objectPosition": "top"}} data-value-1="-25%" data-value-2="23%" />

        <div className="mil-overlay" />
        <div className="container mil-p-120-90">
            <div className="mil-background-grid" />

            <div className="row align-items-start">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-12">

                            <div className="mil-footer-navigation mil-up mil-mb-30">
                                <nav>
                                    <ul>
                                        {AppData.footer.menu.map((item, key) => (
                                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active" : ""}>
                                            <Link href={item.link}>{item.label}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Palhoça - SC</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">Office Green <br/>- Rua da Praça, Av. Pedra Branca, 241, Sala 1015.<br/> CEP 88132-000</p>
                        </div>
                       
                    </div>
                </div>
                <div className="col-lg-4 align-items-end sm-align-items-start d-flex flex-column mx-auto">
                    
                <Link href="https://consultoriasel.com/wp-content/uploads/2023/12/Portfolio-SEL-Consultoria-Empresarial.pdf" target="_blank" className="mil-link mil-light mil-upper mil-right mil-mb-60">Baixar portfólio de produtos <span className="mil-arrow"><img src="img/icons/5.svg" alt="arrow" /></span></Link>                         
                        <Link href="/" className="mil-footer-logo mil-up ">
                            <img src={AppData.footer.logo.image} alt={AppData.footer.logo.alt} style={{"width": "130px"}} />
                        </Link>                                           
                </div>
            </div>
        </div>
        <div className="container-fluid">

            <div className="mil-footer-bottom">
                <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
                <ul className="mil-light-soft mil-mb-15">
                    
                <li><a href="https://www.estudionakama.com.br" target="_about" className="mil-light-soft mil-mb-15">Desenvolvido por Estúdio Nákama</a>
                </li>
                </ul>
                
                <ul className="mil-light-soft mil-mb-15">
                    {AppData.social.map((item, key) => (
                    <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank">{item.title}</a></li>
                    ))}
                </ul>
                <ul className="mil-light-soft mil-mb-15">
                    
                    <li><a href="/termos-de-uso">Termos de uso</a></li>
                    <li><a href="/politicas-de-privacidade">Políticas de Privacidade</a></li>
                </ul>
            </div>

        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
