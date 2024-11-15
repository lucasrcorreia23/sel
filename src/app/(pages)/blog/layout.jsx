'use client';

import { useState, useEffect, useTransition } from 'react';
import AppData from "@data/app.json";
import SkeletonLoader from "@components/SkeletonLoader";

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

const Layouts = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setLoading(isPending); // Atualiza o estado de carregamento durante a transição
  }, [isPending]);

  return (
    <>
      {loading && <SkeletonLoader />} {/* Exibe o loader enquanto `loading` for true */}
      {children}
    </>
  );
};

export default Layouts;
