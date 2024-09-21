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

                            <div className="mil-footer-navigation mil-up mil-mb-90">
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
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Palhoça</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">8619 S Wolcott Avenue <br/>Floor 202 <br/>Chicago, IL 60620 <br/>(773) 238 - 7162</p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Florianópolis</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">10233 Gaillard Lake Est <br/>Suite 420 <br/>Houston, TX 75169 <br/>(903) 560 - 9830</p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">São José</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">5 Harriman Woods Dr <br/>Suite 702 <br/>New York, NY 10926 <br/>(570) 253 - 2853</p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">São Paulo</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">1071 Donegan Rd <br/>Suite 1300 <br/>Florida, FL 33771 <br/>(727) 223 - 5371</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 align-items-end sm-align-items-start d-flex flex-column mx-auto">
                    
                <Link href="#" className="mil-link mil-light mil-upper mil-right mil-mb-60">Baixar portfólios de produtos <span className="mil-arrow"><img src="img/icons/5.svg" alt="arrow" /></span></Link>      
                        
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
                    {AppData.social.map((item, key) => (
                    <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank">{item.title}</a></li>
                    ))}
                </ul>
                <ul className="mil-light-soft mil-mb-15">
                    
                    <li><a href="#.">Sitemap</a></li>
                </ul>
            </div>

        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
