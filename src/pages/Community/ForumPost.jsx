// ForumPost.jsx

import React from 'react';

const ForumPost = ({ post, onUpvote, onDownvote }) => {
    return (
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> 
         <div className="rounded-xl w-full lg:w-96 bg-base-100 shadow-xl mb-4">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.content}</p>
                <div className="card-actions justify-end">
                    <button 
                        className="btn btn-primary"
                        onClick={() => onUpvote(post._id)}
                    >
                        Upvote
                    </button>
                    <button 
                        className="btn btn-secondary"
                        onClick={() => onDownvote(post._id)}
                    >
                        Downvote
                    </button>
                </div>
                <div className="text-base-content">
                    Votes: {post.votes}
                </div>
            </div>
        </div>
       </div>
    );
};

export default ForumPost;
