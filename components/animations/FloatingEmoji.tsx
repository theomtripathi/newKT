// FloatingEmoji.tsx
import React from 'react';

interface FloatingEmojiProps {
  emoji: string;
  style: React.CSSProperties;
}

export const FloatingEmoji: React.FC<FloatingEmojiProps> = React.memo(({ emoji, style }) => (
  <div
    className="absolute animate-float select-none pointer-events-none z-10"
    style={style}
  >
    {emoji}
  </div>
));

FloatingEmoji.displayName = 'FloatingEmoji';