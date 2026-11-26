import { memo } from 'react';

export default memo(function ChildButton({ onClick, label }) {
  console.log('ChildButton render');
  return <button onClick={onClick}>{label}</button>;
});
