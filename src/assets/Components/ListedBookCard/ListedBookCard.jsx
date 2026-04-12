import React from "react";
import { FaRegStar, FaUserFriends, FaFileAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const ListedBookCard = ({ book }) => {
    return (
        <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-base-100 rounded-2xl border border-base-200 shadow-sm hover:shadow-md transition-all duration-300 mb-6">
            
            {/* Book Cover - Made slightly larger for impact */}
            <div className="bg-base-200 p-4 rounded-xl flex-shrink-0 w-full md:w-auto flex justify-center">
                <img
                    src={book.book_image}
                    alt={book.book_name}
                    className="w-32 h-44 object-cover rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Book Info */}
            <div className="flex-1 w-full">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-playfair font-bold text-2xl text-base-content mb-1">
                            {book.book_name}
                        </h3>
                        <p className="text-sm font-medium text-base-content/70 mb-3">
                            By : {book.by_writer}
                        </p>
                    </div>
                </div>

                {/* Tags & Year */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="font-bold text-sm">Tag</span>
                    <div className="flex gap-2">
                        {book.tags.map((tag, i) => (
                            <span key={i} className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-600 font-medium">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-base-content/60">
                        <IoLocationOutline className="text-lg" />
                        <span>Year of Publishing: {book.year_of_publishing}</span>
                    </div>
                </div>

                {/* Metadata Row */}
                <div className="flex flex-wrap gap-6 mb-5 pb-5 border-b border-base-200 text-sm text-base-content/60">
                    <div className="flex items-center gap-2">
                        <FaUserFriends />
                        <span>Publisher: {book.publisher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaFileAlt />
                        <span>Page {book.number_of_pages}</span>
                    </div>
                </div>

                {/* Footer Actions/Badges */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm">
                        Category: {book.genre}
                    </span>
                    <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm">
                        Rating: {book.rating}
                    </span>
                  
                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;