// app/layout.js
import '@styles/scss/style.scss';
import "@styles/css/globals.css";

import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/magnific-popup.css";

import { register } from "swiper/element/bundle";
import ScrollbarProgress from "@layouts/scrollbar-progress/Index";

import Script from 'next/script';
import WhatsappButton from './_components/WhatsappButton';
import { GoogleAnalytics } from '@next/third-parties/google';

register();

import AppData from "@data/app.json";

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

const Layouts = ({ children }) => {
  return (
    <html lang="pt-br">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KKPHKZ3Q');
            `,
          }}
        />
      </head>
      <body>
        {/* Noscript para GTM */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKPHKZ3Q"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <div className="mil-wrapper">
          {children}
          <ScrollbarProgress />
          <WhatsappButton />
        </div>

        <GoogleAnalytics gaId="G-MZD6BW3DGE" />
      </body>
    </html>
  );
};

export default Layouts;
