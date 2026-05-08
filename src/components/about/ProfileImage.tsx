
import React, { useState, useRef, useEffect } from "react";
import { Globe } from "@/features/shared/components/magic-ui/Globe";
import { SpinningText } from "@/features/shared/components/magic-ui/SpinningText";
import { useTranslation } from "react-i18next";

const ProfileImage = () => {
  const { t } = useTranslation();
  const [showSpinText, setShowSpinText] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && videoRef.current) {
        videoRef.current.play().catch(() => {
          console.log("Video playback was prevented");
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        console.log("Video playback was prevented");
      });
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div 
      className="relative h-[450px] group"
      onMouseEnter={() => setShowSpinText(true)}
      onMouseLeave={() => setShowSpinText(false)}
    >
      <div className="bg-accent rounded-2xl overflow-hidden z-10 relative h-full">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-foreground/10 rounded-full group-hover:bg-accent-foreground/10 transition-all duration-500"></div>

        <div className="flex-1 w-full flex items-center justify-center relative">
          <Globe className="scale-[1.15] lg:scale-[1.1] translate-y-[50%] lg:translate-y-[30%] -z-10" />
        </div>
        
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/images/about.mov" type="video/mp4"  />
        </video>

        {/* Spinning Text - Top Right */}
        {showSpinText && (
          <div className="absolute top-6 left-6 flex -z-20 cursor-none">
            <div 
              className="w-28 h-28 rounded-full border-2 border-accent-foreground/50 flex items-center justify-center"
              style={{ boxSizing: "border-box" }} 
            >
              <SpinningText 
                children={t('about.spinning')}
                className="text-accent-foreground" 
                duration={15}
                radius={4}
                followCursor={true}
              />
            </div>
          </div>
        )}
      </div>
      <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-2xl -z-10"></div>
      <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/5 rounded-full blur-2xl -z-10"></div>
      
      {/* Rotating design elements */}
      <div className="absolute w-32 h-32 border border-accent/30 rounded-full -bottom-4 -left-4 animate-spin-slow"></div>
      <div className="absolute w-24 h-24 border border-accent/20 rounded-full -top-4 -right-4 animate-spin-slow-reverse"></div>
    </div>
  );
};

export default ProfileImage;
