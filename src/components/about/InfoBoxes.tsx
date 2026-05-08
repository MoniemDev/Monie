
import React from "react";
import { MapPin, Sparkles, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

const InfoBoxes = () => {
  const { t } = useTranslation();
  
  return (
    <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-0">
      {/* Education Box */}
      <div className="p-5 rounded-lg bg-card border border-border shadow-sm dark:shadow-accent/5 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:translate-y-[-5px] group">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 text-accent">{t('about.education.title')}</h4>
            <p className="text-foreground text-sm">
              {t('about.education.degree')}<br/>
              {t('about.education.university')}
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              {t('about.education.selfTaught')}
            </p>
          </div>
        </div>
      </div>

      {/* Location Box */}
      <div className="p-5 rounded-lg bg-card border border-border shadow-sm dark:shadow-accent/5 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:translate-y-[-5px] group">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 text-accent">{t('about.location.title')}</h4>
            <p className="text-foreground text-sm">
              {t('about.location.place')}<br />
              {t('about.location.availability')}
            </p>
          </div>
        </div>
      </div>

      {/* Experience Box */}
      <div className="p-5 rounded-lg bg-card border border-border shadow-sm dark:shadow-accent/5 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:translate-y-[-5px] group">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 text-accent">{t('about.experienceBox.title')}</h4>
            <p className="text-foreground text-sm">
              {t('about.experienceBox.role1')}<br />
              {t('about.experienceBox.role2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
