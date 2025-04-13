
import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  showHeader?: boolean;
  showDots?: boolean;
  showScanline?: boolean;
}

const TerminalWindow = ({
  title = "terminal",
  children,
  className = "",
  showHeader = true,
  showDots = true,
  showScanline = true,
}: TerminalWindowProps) => {
  return (
    <div className={`terminal-window ${className}`}>
      {showHeader && (
        <div className="terminal-header">
          {showDots && (
            <div className="flex">
              <span className="terminal-dot bg-red-500/70"></span>
              <span className="terminal-dot bg-yellow-500/70"></span>
              <span className="terminal-dot bg-green-500/70"></span>
            </div>
          )}
          <div className="ml-2 text-xs font-mono text-foreground/60">
            {title}
          </div>
        </div>
      )}
      
      {children}
      
      {showScanline && <div className="scan-line"></div>}
    </div>
  );
};

export default TerminalWindow;
