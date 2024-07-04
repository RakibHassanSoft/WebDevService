import React, { useState } from 'react';

const MouseTracker = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
         style={{ left: cursorPosition.x, top: cursorPosition.y }}>
      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
    </div>
  );
};

export default MouseTracker;
