// FloatingEmojis.tsx
import React from 'react';
import { FloatingEmoji } from './FloatingEmoji';
import { getRandomPosition } from '../../utils/animation';

const loveEmojis = ['💖', '💝', '💗', '💓', '⭐️', '✨'];

export function FloatingEmojis() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on server-side and initial client render
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {loveEmojis.map((emoji, index) => (
        <FloatingEmoji
          key={index}
          emoji={emoji}
          style={{
            fontSize: `${Math.random() * 16 + 20}px`,
            ...getRandomPosition(index),
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 5 + 8}s`,
            filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.5))',
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
}