
import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6"; 
import { Card, CardContent } from "./ui/card";
import { useTranslation } from "react-i18next";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  keywords: string[];
  theme: string;
  linkedin?: string;
}

const Experience = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Throttle resize handler
    let resizeTimeout: number | null = null;
    const throttledResize = () => {
      if (resizeTimeout) return;
      resizeTimeout = window.setTimeout(() => {
        checkMobile();
        resizeTimeout = null;
      }, 200);
    };
    checkMobile();
    window.addEventListener('resize', throttledResize);
    return () => window.removeEventListener('resize', throttledResize);
  }, []);

  const experiences: Experience[] = [
    {
      id: 1,
      role: t('experience.emojidesign.role'),
      company: t('experience.emojidesign.company'),
      period: t('experience.emojidesign.period'),
      description: [
        t('experience.emojidesign.desc1'),
        t('experience.emojidesign.desc2')
      ],
      keywords: t('experience.emojidesign.keywords', { returnObjects: true }) as string[],
      theme: "Design",
      linkedin: ""
    },
    {
      id: 2,
      role: t('experience.gezira.role'),
      company: t('experience.gezira.company'),
      period: t('experience.gezira.period'),
      description: [
        t('experience.gezira.desc1'),
        t('experience.gezira.desc2')
      ],
      keywords: t('experience.gezira.keywords', { returnObjects: true }) as string[],
      theme: "Strategy",
      linkedin: ""
    },
    {
      id: 3,
      role: t('experience.tiktok.role'),
      company: t('experience.tiktok.company'),
      period: t('experience.tiktok.period'),
      description: [
        t('experience.tiktok.desc1'),
        t('experience.tiktok.desc2')
      ],
      keywords: t('experience.tiktok.keywords', { returnObjects: true }) as string[],
      theme: "Engagement",
      linkedin: ""
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom max-w-5xl">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('experience.title')}</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">{t('experience.subtitle')}</p>
        </div>
        
        <div className="timeline-container relative pl-6 md:pl-0 md:ml-12">
          {/* Single responsive timeline vertical line - fixed alignment */}
          <div className={`absolute left-0 md:left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/10 via-accent to-accent/10`}></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-8">
              {/* Timeline dot with pulse effect - better aligned */}
              <div className="absolute left-[-23px] md:left-[1px] top-0 transform -translate-x-1/2 z-10">
                <div className="relative w-5 h-5 bg-accent rounded-full ring-2 ring-white shadow-md 
                              hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 animate-ping bg-accent rounded-full opacity-20"></div>
                </div>
              </div>
              
              {/* Experience card - improved layout */}
              <div className="ml-1 md:ml-12">
                <Card className="group overflow-hidden border border-border shadow-md hover:shadow-xl dark:shadow-accent/10
                               hover:-translate-y-1 transition-all duration-300 will-change-transform">
                  <CardContent className="p-4 md:p-6">
                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3 md:mb-4">
                        <div>
                          {/* Date badge */}
                          <div className="inline-flex items-center bg-accent/5 text-accent rounded-full 
                                        px-3 py-1 md:px-4 md:py-1.5 text-sm font-medium mb-1.5 md:mb-2 hover:bg-accent/10 transition-colors">
                            <Calendar size={14} strokeWidth={2.5} className="mr-1.5" />
                            {exp.period}
                          </div>
                          
                          {/* Role and company */}
                          <div className="flex items-center gap-2">
                            <p className="text-accent font-semibold text-base md:text-lg">{exp.company}</p>
                            {exp.linkedin && (
                              <a
                                href={exp.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-blue-700 transition-colors"
                                aria-label={`LinkedIn for ${exp.company}`}
                              >
                                <FaLinkedin size={18} />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Keywords with better styling - moved to mobile friendly position */}
                        <div className="flex flex-wrap gap-1.5 md:gap-2 md:max-w-[40%] justify-start md:justify-end">
                          {exp.keywords.map((keyword, i) => (
                            <span key={i} 
                                  className="inline-flex items-center bg-muted text-muted-foreground rounded-full 
                                           px-3 py-1 text-xs md:text-sm font-medium hover:bg-accent/5 hover:text-accent 
                                           cursor-pointer transition-all duration-300 hover:scale-105">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Description list with enhanced interactivity */}
                      <ul className="space-y-1.5 md:space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start group/item hover:bg-muted/50 
                                                p-1.5 rounded-lg transition-all duration-300">
                            <div className="flex-shrink-0 w-2 h-2 mt-1.5 mr-2 md:mr-3 bg-accent/30 rounded-full 
                                          group-hover/item:bg-accent group-hover/item:scale-125 transition-all duration-300" />
                            <span className="text-sm md:text-base text-muted-foreground group-hover/item:text-foreground transition-colors">
                              {item.includes('Nexfellow') ? (
                                <>
                                  {item.split('Nexfellow')[0]}
                                  <a 
                                    href="https://www.nexfellow.com/community/AnuragAdarsh" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-accent hover:text-accent/80 underline font-medium transition-colors"
                                  >
                                    Nexfellow
                                  </a>
                                  {item.split('Nexfellow')[1]}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);

};

export default Experience;