import React, { useState, useEffect, useRef } from 'react';

const Header = ({ title1, title2, text }) => {
  const [typedText1, setTypedText1] = useState('');
  const [typedText2, setTypedText2] = useState('');
  const [typedText3, setTypedText3] = useState('');

  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTyping();
        }
      });
    }, {
      threshold: 0.5 // Adjust as needed to control when the typing starts relative to section visibility
    });

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const startTyping = () => {
    typeText(title1, setTypedText1, 40); // Slower typing speed for text1
    typeText(title2, setTypedText2, 50); // Slower typing speed for text2
    typeText(text, setTypedText3, 10);    // Faster typing speed for text3
  };

  const typeText = (text, setText, interval) => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, interval); // Adjust typing speed as needed (milliseconds)
  };

  return (
    <div ref={headerRef} className='flex flex-col mb-5 justify-center items-center w-full'>
      {/* left */}
      <div className='w-full md:w-1/2 lg:w-1/2 text-center'>
        <h1 className='text-green-400 text-2xl'>{typedText1}</h1>
        <h1 className='text-white text-4xl'>
          {typedText2} <span className='text-green-500'>Skill</span>
        </h1>
      </div>
      {/* right */}
      <div className='lg:w-1/2 p-4'>
        <p className='border-l-4 text-sm border-green-500 pl-4 text-white'>
          {typedText3}
        </p>
      </div>
    </div>
  );
};

export default Header;
