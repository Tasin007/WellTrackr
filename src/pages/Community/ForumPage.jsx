// ForumPage.jsx

import React, { useState, useEffect } from 'react';
import ForumPost from './ForumPost';
import Pagination from './Pagination';

const ForumPage = () => {
    const [posts, setPosts] = useState([]);
    const [totalPosts, setTotalPosts] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    useEffect(() => {
        fetchPosts();
    }, [currentPage]);

    const fetchPosts = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/forums?page=${currentPage}&pageSize=${postsPerPage}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPosts(data.data);
            setTotalPosts(data.total);
        } catch (error) {
            console.error("Error fetching forum posts:", error);
        }
    };

    const handleUpvote = async (postId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/forums/${postId}/upvote`, { method: 'PUT' });
            if (response.ok) {
                fetchPosts(); // Refresh posts to reflect the new vote count
            }
        } catch (error) {
            console.error("Error upvoting post:", error);
        }
    };

    const handleDownvote = async (postId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/v1/forums/${postId}/downvote`, { method: 'PUT' });
            if (response.ok) {
                fetchPosts(); // Refresh posts to reflect the new vote count
            }
        } catch (error) {
            console.error("Error downvoting post:", error);
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto p-4">
            {posts.map(post => (
                <ForumPost 
                    key={post._id} // Ensure your post objects have an _id property
                    post={post}
                    onUpvote={handleUpvote}
                    onDownvote={handleDownvote}
                />
            ))}
            <Pagination 
                currentPage={currentPage}
                totalPosts={totalPosts}
                postsPerPage={postsPerPage}
                paginate={handlePageChange}
            />
        </div>
    );
};

export default ForumPage;
