
import React from "react";
import { BookOpen } from "lucide-react";
import { DesktopTextReveal, MobileTextReveal } from "@/features/shared/components/magic-ui/TextRevealResponsive";
import { useTranslation } from "react-i18next";

const TextRevealSection = () => {
  const { t } = useTranslation();
  
  return (
    <div className="mb-6 md:mb-10 w-full relative px-0">
      <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4 md:mb-5">
        <BookOpen className="inline-block mr-2 h-4 w-4" />
        {t('about.badge')}
      </div>
      
      <div className="w-full lg:px-0 px-0">
        <div className="w-full ">
          <h3 className="text-2xl md:text-4xl font-bold leading-relaxed md:leading-relaxed w-full">
            <DesktopTextReveal className="text-5xl md:text-6xl font-medium leading-relaxed text-foreground">
              {t('about.intro')}
            </DesktopTextReveal>
            <MobileTextReveal className="text-lg md:text-4xl font-medium leading-relaxed text-foreground">
              {t('about.intro')}
           </MobileTextReveal>
          </h3>

      
        </div>
      </div>
    </div>
  );
};

export default TextRevealSection;
