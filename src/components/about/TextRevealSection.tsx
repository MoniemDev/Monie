
import React from "react";
import { BookOpen } from "lucide-react";
import { DesktopTextReveal, MobileTextReveal } from "@/features/shared/components/magic-ui/TextRevealResponsive";

const TextRevealSection = () => {
  return (
    <div className="mb-6 md:mb-10 w-full relative px-0">
      <div className="inline-block px-4 py-1.5 bg-[#3E40EF]/10 text-[#3E40EF] rounded-full text-sm font-medium mb-4 md:mb-5">
        <BookOpen className="inline-block mr-2 h-4 w-4" />
        From Dental School to Digital Products
      </div>
      
      <div className="w-full lg:px-0 px-0">
        <div className="w-full ">
          <h3 className="text-2xl md:text-4xl font-bold leading-relaxed md:leading-relaxed w-full">
            <DesktopTextReveal className="text-5xl md:text-6xl font-medium leading-relaxed text-gray-700">
              Hey, I'm Mohammed Moniem — a former dental student who found a new path through technology during one of the hardest periods in Sudan. What started as curiosity became a full transition into front-end development, UI design, and digital product building. I design and develop modern websites, create user-focused experiences, and help businesses move beyond just social media into real digital presence.
            </DesktopTextReveal>
            <MobileTextReveal className="text-lg md:text-4xl font-medium leading-relaxed text-gray-700">
              Hey, I'm Mohammed Moniem — a former dental student who found a new path through technology during one of the hardest periods in Sudan. What started as curiosity became a full transition into front-end development, UI design, and digital product building.
           </MobileTextReveal>
          </h3>

      
        </div>
      </div>
    </div>
  );
};

export default TextRevealSection;
