// app/layout.js
import '@styles/scss/style.scss';
import "@styles/css/globals.css";

import Head from 'next/head';

import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/magnific-popup.css";

import { register } from "swiper/element/bundle";
import ScrollbarProgress from "@layouts/scrollbar-progress/Index";

import Script from 'next/script';
import WhatsappButton from './_components/WhatsappButton';

register();

import AppData from "@data/app.json";

export const metadata = {
  title: {
		default: AppData.settings.siteName,
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

const Layouts = ({ children }) => {
  return (
    <html lang="pt-br">
      <Head>
        {/* Meta Pixel Code */}
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1699814850568555');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1699814850568555&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}

          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-MZD6BW3DGE"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-MZD6BW3DGE');
          `}
        </script>
        {/* End Google tag (gtag.js) */}
      </Head>
      <body>
        <div className="mil-wrapper">
          {children}
          <ScrollbarProgress />
          <WhatsappButton /> {/* Inclua o botão do WhatsApp aqui */}
        </div>
      </body>
    </html>
  );
};

export default Layouts;