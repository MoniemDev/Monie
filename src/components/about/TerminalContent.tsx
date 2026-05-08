
import React from "react";
import InteractiveTerminal from "../InteractiveTerminal";
import { useTranslation } from "react-i18next";

const TerminalContent = () => {
  const { t } = useTranslation();
  
  return (
    <div className="h-[660px] lg:h-[450px] bg-card rounded-lg border border-border p-6 relative shadow-sm dark:shadow-accent/5 overflow-hidden">
      {/* Terminal Header */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-[#121212] dark:bg-[#0a0a0a] rounded-t-lg border-b border-border flex items-center px-4">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]"></div>
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="h-3 w-3 rounded-full bg-[#27C93F]"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono">
          about.txt
        </div>
      </div>

      {/* Terminal Content with Blinking Cursor and Typing Effect */}
      <div className="mt-6">
        <p className="text-muted-foreground font-mono text-base mb-2">
          {t('about.terminal.greeting')}
        </p>
        
        <div className="space-y-6 text-muted-foreground font-display text-base leading-relaxed pr-2">
          <p className="text-foreground">
            {t('about.terminal.line1')}
          </p>
          <p className="text-foreground">
            {t('about.terminal.line2')}
          </p>
          <p className="text-foreground">
            {t('about.terminal.line3')}
          </p>
          <p className="text-foreground">
            {t('about.terminal.line4')}
          </p>
          <p className="text-foreground">
            {t('about.terminal.line5')}
          </p>
          
          {/* Interactive terminal with user input */}
          <div className="mt-2 mb-2 w-full max-w-full">
            <InteractiveTerminal className="md:min-w-[400px] w-full font-mono" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalContent;
