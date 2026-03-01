import { useState, useEffect } from 'react';

export function useTypingAnimation(fullText, isActive, onComplete) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!isActive) {
      setDisplayText(fullText);
      return;
    }

    setDisplayText('');
    let i = 0;

    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, 33);

    return () => clearInterval(timer);
  }, [isActive, fullText]);

  return displayText;
}
