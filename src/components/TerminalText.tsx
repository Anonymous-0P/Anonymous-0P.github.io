
import { useEffect, useState, useRef } from "react";

interface TerminalTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
  onComplete?: () => void;
}

const TerminalText = ({
  texts,
  typingSpeed = 70,
  deletingSpeed = 50,
  delayBetweenTexts = 1000,
  className = "",
  onComplete
}: TerminalTextProps) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const currentIndexRef = useRef(0);
  const textRef = useRef(texts[0]);
  const completedCyclesRef = useRef(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const type = () => {
      const current = textRef.current;
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText.length === 1) {
          setIsDeleting(false);
          currentIndexRef.current = (currentIndexRef.current + 1) % texts.length;
          textRef.current = texts[currentIndexRef.current];
          
          if (currentIndexRef.current === 0) {
            completedCyclesRef.current += 1;
            if (onComplete && completedCyclesRef.current === 1) {
              onComplete();
            }
          }
          
          timeout = setTimeout(type, delayBetweenTexts);
          return;
        }
        
        timeout = setTimeout(type, deletingSpeed);
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText.length === current.length) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            timeout = setTimeout(type, delayBetweenTexts);
          }, delayBetweenTexts);
          return;
        }
        
        timeout = setTimeout(type, typingSpeed);
      }
    };
    
    timeout = setTimeout(type, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts, onComplete]);
  
  return (
    <span className={`${className} inline-block`}>
      {currentText}
      <span className="animate-text-blink">|</span>
    </span>
  );
};

export default TerminalText;
