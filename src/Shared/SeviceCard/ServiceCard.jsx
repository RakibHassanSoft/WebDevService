import { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = () => {
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setBgPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setBgPosition({ x: 0, y: 0 }); // Reset position when mouse leaves
  };

  const handleClick = () => {
    // Handle click event
    console.log('Card clicked!');
    // You can add your logic here for what happens when the card is clicked
  };

  return (
    <div className="service-card-wrapper shadow-lg m-1">
      <Link to='/' className="relative overflow-hidden   rounded-sm border-green-500   shadow-2xl  shadow-slate-500 bg-black group p-0" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        <img src="https://i.ibb.co/9tk4hXL/P-png.png" alt="" className="w-full" />
        {bgPosition.x !== 0 && ( // Only show when bgPosition is set
          <div className="absolute inset-0 bg-opacity-70 bg-green-500" style={{ clipPath: `circle(10% at ${bgPosition.x}px ${bgPosition.y}px)` }}></div>
        )}
        <div className="bg-gray-600 text-white  p-4">
          <h1 className="text-lg font-semibold text-left">Web development</h1>
          <p className="text-white mt-2 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
