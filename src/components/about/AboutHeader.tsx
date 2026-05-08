
import React from "react";
import { useTranslation } from "react-i18next";

const AboutHeader = () => {
  const { t } = useTranslation();
  
  return (
    <div className="mb-5 md:mb-6">
      <h2 className="mb-4">{t('about.title')}</h2>
      <div className="w-24 h-1 bg-accent"></div>
    </div>
  );
};

export default AboutHeader;
