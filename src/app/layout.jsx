// app/layout.js
import '@styles/scss/style.scss';
import "./globals.css";

import "@styles/css/plugins/bootstrap-grid.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/magnific-popup.css";

import { register } from "swiper/element/bundle";
import ScrollbarProgress from "@layouts/scrollbar-progress/Index";
import { metadata } from './metadata';
import Script from 'next/script';
import WhatsappButton from './_components/WhatsappButton';

register();

export const Metadata = metadata;

const Layouts = ({ children }) => {
  return (
    <html lang="pt-br">
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