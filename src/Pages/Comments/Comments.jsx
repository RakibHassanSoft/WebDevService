import React from 'react';
import Comment from '../Blogs/Comment/Comment';


const Comments = () => {
  const comments = [
    {
      name: 'JENIFER LOFEZ',
      date: '35 DAYS AGO',
      content:
        "It doesn’t matter if you want to use a solid color, image pattern or one of your favorites across the entire background of your site, X lets you upload or choose an image color instantly.",
    },
    {
      name: 'JENIFER LOFEZ',
      date: '35 DAYS AGO',
      content:
        "It doesn’t matter if you want to use a solid color, image pattern or one of your favorites across the entire background of your site, X lets you upload or choose an image color instantly.",
    },
  ];

  return (
    <div>
   <h1 className='text-green-500 text-4xl font-bold mt-6 mb-6'>Comments</h1>
    <div>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          name={comment.name}
          date={comment.date}
          content={comment.content}
        />
      ))}
    </div>
    </div>
  );
};

export default Comments;
