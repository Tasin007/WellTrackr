// Pagination.jsx

import React from 'react';

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center space-x-2">
                {pageNumbers.map(number => (
                    <li key={number} className="list-none">
                        <button 
                            onClick={() => paginate(number)}
                            className={`px-3 py-1 border rounded hover:bg-gray-200 
                                        ${number === currentPage ? 'bg-blue-500 text-white' : ''}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
