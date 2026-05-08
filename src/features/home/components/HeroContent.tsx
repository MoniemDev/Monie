
import React from "react";
import { HeroButtons } from "./HeroButtons";

interface HeroContentProps {
  triggerConfetti: () => void;
}

export const HeroContent = ({ triggerConfetti }: HeroContentProps) => {
  return (
    <div className="lg:col-span-7 z-10 mt-10 sm:mt-0">
      <div className="space-y-2 md:space-y-6 max-w-3xl">
        <div className="flex flex-wrap gap-2 mb-4 animate-fade-in mt-2 sm:mt-0">
          <span className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium">
            Front-End Developer
          </span>
          <span className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium">
            UI Designer
          </span>
          <span className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium">
            Content Creator
          </span>
          <span className="inline-block px-3 py-1 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium">
            Startup Builder
          </span>
        </div>
        <h1 className="animate-slide-in font-black text-4xl md:text-5xl lg:text-6xl leading-tight" style={{ animationDelay: "0.1s" }}>
          I Design & Build
          <br />
          Digital Products That
          <br />
          <span className="text-[#3E40EF]">Solve Real Problems</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 animate-slide-in mt-4" style={{ animationDelay: "0.2s" }}>
          Self-taught front-end developer and UI designer from Sudan. I started learning programming during the war while my dental studies were paused. Today I build websites, digital products, and startup ideas for real clients and businesses.
        </p>
        <div className="flex flex-row sm:gap-5 gap-3 sm:pl-2 pt-6 md:pt-6 animate-slide-in" style={{ animationDelay: "0.3s" }}>
          <HeroButtons triggerConfetti={triggerConfetti} />
        </div>
      </div>
    </div>
  );
};
