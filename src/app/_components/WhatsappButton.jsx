// app/components/WhatsappButton.jsx
"use client"; // Isso indica que este é um componente de cliente

import { useEffect } from "react";
import AppData from "@data/app.json"; // Ajuste o caminho conforme necessário

const WhatsappButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      if (typeof _waEmbed === 'function') {
        _waEmbed({
          btnColor: AppData.settings.whatsapp.btnColor,
          ctaText: AppData.settings.whatsapp.ctaText,
          cornerRadius: AppData.settings.whatsapp.cornerRadius,
          marginBottom: AppData.settings.whatsapp.marginBottom,
          marginLeft: AppData.settings.whatsapp.marginLeft,
          marginRight: AppData.settings.whatsapp.marginRight,
          btnPosition: AppData.settings.whatsapp.btnPosition,
          whatsAppNumber: AppData.settings.whatsapp.whatsAppNumber,
          welcomeMessage: AppData.settings.whatsapp.welcomeMessage,
          zIndex: AppData.settings.whatsapp.zIndex,
          btnColorScheme: AppData.settings.whatsapp.btnColorScheme,
        });
      }
    };

    return () => {
      // Verifica se o script está no document.body antes de tentar removê-lo
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // Não renderiza nada no DOM, apenas carrega o script
};

export default WhatsappButton;
