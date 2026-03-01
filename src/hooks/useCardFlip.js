import { useState } from 'react';

export function useCardFlip() {
  const [flippedId, setFlippedId] = useState(null);

  const flip = (id) => {
    setFlippedId((prev) => (prev === id ? null : id));
  };

  const reset = () => setFlippedId(null);

  return { flippedId, flip, reset };
}
