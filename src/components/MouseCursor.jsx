import React, { useState, useEffect, useRef } from 'react';

const MouseCursor = () => {
  const [isHover, setIsHover] = useState(false);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  const handleMove = (event) => {
    const clientX = event.clientX || event.touches[0].clientX;
    const clientY = event.clientY || event.touches[0].clientY;
    targetPosition.current = { x: clientX, y: clientY };
  };

  const handleEnter = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  const updatePosition = () => {
    currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * 0.1;
    currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * 0.1;
    
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px)`;
    }
    
    requestAnimationFrame(updatePosition);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);
    requestAnimationFrame(updatePosition);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50"
    >
      {/* Single dot */}
      <div
        className={`w-2 h-2 rounded-full bg-[#a20038] absolute transition-opacity duration-300 ${
          isHover ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      {/* Outer circle */}
      <div
        className={`w-8 h-8 rounded-full border-1 border-[#a20038] absolute transition-all duration-300 ${
          isHover ? 'border-2 w-12 h-12 opacity-50' : ''
        }`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onTouchStart={handleEnter}
        onTouchEnd={handleLeave}
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
};

export default MouseCursor;
