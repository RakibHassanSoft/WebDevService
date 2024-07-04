import React from 'react';

const Comment = ({ name, date, content }) => {
  return (
    <div className="flex w-1/2  m-auto gap-4 mb-6">
      <div className='flex justify-center items-center'>
        <img 
          className="rounded-full w-20 h-20 object-cover" 
          src="https://i.ibb.co/qNd0YFf/istockphoto-1335295270-2048x2048.jpg" 
          alt="Profile"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-2">
          <div className="text-green-500 flex gap-6 font-semibold">
          <h1>  {name}    </h1>
          <h1>  {date}  </h1>
            
            </div>
          <button className="text-blue-500 hover:underline">REPLY</button>
        </div>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default Comment;
