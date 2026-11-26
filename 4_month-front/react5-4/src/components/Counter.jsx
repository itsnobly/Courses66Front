import { useState, useCallback } from 'react';
import ChildButton from './ChildButton';
export default function Counter() {
  const [counter, setCounter] = useState(0);
  const handleClick = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);
  console.log('Counter render');
  return (
    <div>
      <span>num - {counter}</span>

      <ChildButton onClick={handleClick} label={'+1'} />
    </div>
  );
}
