
import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6"; 
import { Card, CardContent } from "./ui/card";

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
      role: "Front-End Developer & UI Designer",
      company: "EmojiDesign",
      period: "2023 - Present",
      description: [
        "Worked on branding, web development, and digital experiences for businesses and organizations. Managed social media content and helped clients establish stronger digital presence.",
        "Delivered modern, responsive websites and digital products combining clean design with solid technical implementation."
      ],
      keywords: ["Branding", "Web Development", "Social Media", "Digital Design"],
      theme: "Design",
      linkedin: ""
    },
    {
      id: 2,
      role: "Media & IT Assistant",
      company: "Gezira SNO",
      period: "2023 - 2024",
      description: [
        "Conducted digital literacy workshops and supported refugee data collection operations using KOBO tools in collaboration with humanitarian initiatives.",
        "Provided technical support and training to help communities access digital resources and improve data management systems."
      ],
      keywords: ["Digital Literacy", "Data Collection", "Tech Support", "Humanitarian Work"],
      theme: "Strategy",
      linkedin: ""
    },
    {
      id: 3,
      role: "Content Creator",
      company: "TikTok",
      period: "2023 - Present",
      description: [
        "Built an audience sharing content about web development, career transition, and self-learning during the Sudan war. Reached thousands of followers through educational and motivational tech content.",
        "Created programming tutorials, career advice, and motivational content to inspire Sudanese youth to explore technology and digital opportunities."
      ],
      keywords: ["Programming", "Storytelling", "Education", "Content Strategy"],
      theme: "Engagement",
      linkedin: ""
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom max-w-5xl">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">My professional journey through design leadership and innovation</p>
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
                <Card className="group overflow-hidden border border-gray-100 shadow-md hover:shadow-xl 
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
                                className="text-gray-800 hover:text-blue-700 transition-colors"
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
                                  className="inline-flex items-center bg-gray-50 text-gray-600 rounded-full 
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
                          <li key={i} className="flex items-start group/item hover:bg-gray-50/50 
                                                p-1.5 rounded-lg transition-all duration-300">
                            <div className="flex-shrink-0 w-2 h-2 mt-1.5 mr-2 md:mr-3 bg-accent/30 rounded-full 
                                          group-hover/item:bg-accent group-hover/item:scale-125 transition-all duration-300" />
                            <span className="text-sm md:text-base text-gray-600 group-hover/item:text-gray-900 transition-colors">
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