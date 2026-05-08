import React, { memo } from "react";
import { BorderBeam, RainbowButton, WhiteRainbowButton } from "@/features/shared/components/magic-ui";
import { AnimatedGridPattern } from "@/components/AnimatedGridPattern";
import { motion, LazyMotion, domAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { OptimizedImage } from "./OptimizedImage";
import { useTranslation } from "react-i18next";

interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard = memo(({ project, index }: { project: Project; index: number }) => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -10% 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="w-full"
    >
      <motion.div 
        className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl dark:shadow-accent/10 transition-all duration-300 p-3 md:p-5 bg-card relative border border-border"
        whileHover={{ 
          scale: 1.01,
          transition: { duration: 0.2 }
        }}
      >
        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4`}>
          <div 
            className={`relative w-full md:w-[40%] p-4 md:p-6 flex flex-col justify-between rounded-xl overflow-hidden ${
              index % 2 === 0 
                ? 'bg-muted text-foreground' 
                : 'bg-accent text-accent-foreground'
            }`}
          >
            <div>
              <div className="mb-3">
                <span 
                  className={`block text-sm mb-1 font-medium ${
                    index % 2 === 0 ? 'text-accent' : 'text-accent-foreground/80'
                  }`}
                >
                  {project.year}
                </span>
                <h3 className="text-xl font-bold md:text-2xl">{project.title}</h3>
              </div>
              
              <p className={`mb-4 ${index % 2 === 0 ? 'text-muted-foreground' : 'text-accent-foreground/80'} text-sm md:text-base`}>
                {project.description}
              </p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      index % 2 === 0 
                        ? 'bg-background text-foreground' 
                        : 'bg-accent-foreground/20 text-accent-foreground'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {index === 0 || index === 2 ? (
              <div className="relative w-fit">
                <RainbowButton className="mt-5 scale-90 origin-left">
                  <Link to={`/projects/${project.id}`} className="flex items-center justify-center text-sm w-32">
                    {t('projects.viewProject')}
                  </Link>
                </RainbowButton>
              </div>
            ) : (
              <div className="relative w-fit">
                <WhiteRainbowButton className="mt-5 scale-90 origin-left">
                  <Link to={`/projects/${project.id}`} className="flex items-center justify-center text-sm w-32">
                    {t('projects.viewProject')}
                  </Link>
                </WhiteRainbowButton>
              </div>
            )}
            
            <div 
              className={`absolute -bottom-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform scale-0 group-hover:scale-100 ${
                index % 2 === 0 ? 'bg-accent' : 'bg-accent-foreground'
              }`}
            />

            <BorderBeam 
              colorFrom={index % 2 === 0 ? "#3E40EF" : "#ffffff"} 
              colorTo={index % 2 === 0 ? "#6366F1" : "#D6BCFA"} 
              size={32} 
              duration={8}
              delay={index * 0.5}
              reverse={index % 2 !== 0}
            />
          </div>
          
          <div className="w-full md:w-[60%] h-[300px] sm:h-[400px] overflow-hidden rounded-xl md:mx-0 mt-2 md:mt-0 order-first md:order-none">
            <OptimizedImage
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const { t } = useTranslation();
  
  const projects: Project[] = [
    {
      id: "trustbuild",
      title: t('projects.trustbuild.title'),
      year: t('projects.trustbuild.year'),
      description: t('projects.trustbuild.description'),
      image: "/images/csedm.webp",
      tags: t('projects.trustbuild.tags', { returnObjects: true }) as string[],
      link: "#",
    },
    {
      id: "aqmahost",
      title: t('projects.aqmahost.title'),
      year: t('projects.aqmahost.year'),
      description: t('projects.aqmahost.description'),
      image: "/images/campusm.webp",
      tags: t('projects.aqmahost.tags', { returnObjects: true }) as string[],
      link: "#",
    },
    {
      id: "wasel",
      title: t('projects.wasel.title'),
      year: t('projects.wasel.year'),
      description: t('projects.wasel.description'),
      image: "/images/cabm.webp",
      tags: t('projects.wasel.tags', { returnObjects: true }) as string[],
      link: "#",
    },
    {
      id: "portfolio",
      title: t('projects.portfolio.title'),
      year: t('projects.portfolio.year'),
      description: t('projects.portfolio.description'),
      image: "/images/imagim.webp",
      tags: t('projects.portfolio.tags', { returnObjects: true }) as string[],
      link: "#",
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="section-padding py-14 md:py-16 bg-muted/30 relative overflow-hidden">
        <AnimatedGridPattern
          numSquares={24}
          maxOpacity={0.08}
          duration={4}
          repeatDelay={2}
          className="absolute inset-x-[-20%] inset-y-[0%] w-[60%] h-[60%] skew-y-12 text-accent/80 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        />
        <AnimatedGridPattern
          numSquares={24}
          maxOpacity={0.08}
          duration={4}
          repeatDelay={2}
          className="absolute inset-x-[60%] inset-y-[40%] w-[60%] h-[60%] -skew-y-12 text-accent/80 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        />

        <div className="container-custom">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="mb-4">{t('projects.title')}</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {t('projects.subtitle')}
            </p>
            <div className="mx-auto mt-4 h-1 w-24 bg-accent"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:gap-10">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default memo(Projects);
