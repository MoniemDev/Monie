
import React from "react";
import { MapPin, Sparkles, BookOpen } from "lucide-react";

const InfoBoxes = () => {
  return (
    <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-0">
      {/* Education Box */}
      <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#3E40EF]/30 hover:translate-y-[-5px] group">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors duration-300">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Education</h4>
            <p className="text-gray-700 text-sm">
              Faculty of Dentistry<br/>
              University Student — Sudan
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Self-Taught Front-End Development & UI Design
            </p>
          </div>
        </div>
      </div>

      {/* Location Box */}
      <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#3E40EF]/30 hover:translate-y-[-5px] group">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors duration-300">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Location</h4>
            <p className="text-gray-700 text-sm">
              Based in Sudan<br />
              Available for Remote Work
            </p>
          </div>
        </div>
      </div>

      {/* Experience Box */}
      <div className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-[#3E40EF]/30 hover:translate-y-[-5px] group">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-lg bg-[#3E40EF]/10 text-[#3E40EF] group-hover:bg-[#3E40EF] group-hover:text-white transition-colors duration-300">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 text-[#3E40EF]">Experience</h4>
            <p className="text-gray-700 text-sm">
              Front-End Developer & UI Designer<br />
              Content Creator | TikTok
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBoxes;
