import React, { use, Suspense } from "react";
import { FaRegStar } from "react-icons/fa";

const BookPromise = fetch('/BookData.json')
  .then(res => res.json())
  .then(data => data.books);

const BookList = () => {
  const books = use(BookPromise);

  return (
    <div className="container mx-auto px-4">

      <h2 className="font-bold text-5xl text-center py-10 text-cyan-900">
        Books
      </h2>

      {/* ✅ Grid is OUTSIDE the map — one grid, many cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {books.map((book) => (
          <div key={book.id} className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow duration-200">

         <figure className="group h-60 overflow-hidden relative">
  <img
    src={book.book_image}
    alt={book.book_name}
    className="h-[200px] group-hover:scale-110 transition-transform duration-700"
  />
  {/* Dark gradient overlay that appears on hover */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
    <span className="text-white text-xs font-medium">View Details</span>
  </div>
</figure>
            <div className="card-body">

              {/* Tags */}
              <div className="flex gap-2 flex-wrap">
                <span className="badge text-green-600 font-semibold bg-green-50 border-green-200 rounded-full px-3">
                  {book.tags[0]}
                </span>
                <span className="badge text-green-600 font-semibold bg-green-50 border-green-200 rounded-full px-3">
                  {book.tags[1]}
                </span>
              </div>

              {/* Title */}
              <h2 className="card-title text-xl text-cyan-900 font-bold leading-snug">
                {book.book_name}
              </h2>

              {/* Author */}
              <p className="text-xs font-semibold text-gray-500">
                By: {book.by_writer}
              </p>

              <hr className="my-3 border-dashed border-gray-300" />

              {/* Footer */}
              <div className="card-actions flex items-center justify-between">
                <p className="text-sm text-gray-400 italic">{book.genre}</p>
                <div className="flex gap-1 items-center text-yellow-500 font-bold text-sm">
                  <span>{book.rating}</span>
                  <FaRegStar />
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

const AllBooks = () => {
  return (
    <Suspense fallback={
      <p className="text-center py-20 text-gray-400 text-lg">Loading books...</p>
    }>
      <BookList />
    </Suspense>
  );
};

export default AllBooks;