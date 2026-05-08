
import React from "react";
import { HeroButtons } from "./HeroButtons";
import { useTranslation } from "react-i18next";

interface HeroContentProps {
  triggerConfetti: () => void;
}

export const HeroContent = ({ triggerConfetti }: HeroContentProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="lg:col-span-7 z-10 mt-10 sm:mt-0">
      <div className="space-y-2 md:space-y-6 max-w-3xl">
        <div className="flex flex-wrap gap-2 mb-4 animate-fade-in mt-2 sm:mt-0">
          <span className="inline-block px-3 py-1 bg-[#3E40EF]/10 dark:bg-[#6366F1]/20 text-[#3E40EF] dark:text-[#818CF8] rounded-full text-sm font-medium">
            {t('hero.roles.frontend')}
          </span>
          <span className="inline-block px-3 py-1 bg-[#3E40EF]/10 dark:bg-[#6366F1]/20 text-[#3E40EF] dark:text-[#818CF8] rounded-full text-sm font-medium">
            {t('hero.roles.designer')}
          </span>
          <span className="inline-block px-3 py-1 bg-[#3E40EF]/10 dark:bg-[#6366F1]/20 text-[#3E40EF] dark:text-[#818CF8] rounded-full text-sm font-medium">
            {t('hero.roles.creator')}
          </span>
          <span className="inline-block px-3 py-1 bg-[#3E40EF]/10 dark:bg-[#6366F1]/20 text-[#3E40EF] dark:text-[#818CF8] rounded-full text-sm font-medium">
            {t('hero.roles.builder')}
          </span>
        </div>
        <h1 className="animate-slide-in font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white" style={{ animationDelay: "0.1s" }}>
          {t('hero.title1')}
          <br />
          {t('hero.title2')}
          <br />
          <span className="text-[#3E40EF] dark:text-[#818CF8]">{t('hero.title3')}</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-slide-in mt-4" style={{ animationDelay: "0.2s" }}>
          {t('hero.description')}
        </p>
        <div className="flex flex-row sm:gap-5 gap-3 sm:pl-2 pt-6 md:pt-6 animate-slide-in" style={{ animationDelay: "0.3s" }}>
          <HeroButtons triggerConfetti={triggerConfetti} />
        </div>
      </div>
    </div>
  );
};
