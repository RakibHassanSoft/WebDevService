import React, { useState, useEffect } from 'react';

const CursorFollower = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY + scrollY });
  };

  return (
    <div className="bg-black relative z-50" onMouseMove={handleMouseMove}>
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-50"
           style={{ left: cursorPosition.x, top: cursorPosition.y }}>
        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
      </div>
      {children}
    </div>
  );
};

export default CursorFollower;
