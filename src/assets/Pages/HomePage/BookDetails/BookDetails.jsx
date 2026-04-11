import React from "react";
import { useParams, useLoaderData } from "react-router";

const BookDetails = () => {
    const { id } = useParams();         
    const books = useLoaderData();       

    const expectedBook = books.find(book => book.id == id);  
    console.log(expectedBook);

    return (
    <div>

return (
  <div className="max-w-3xl mx-auto my-8 bg-base-100 border border-base-200 rounded-2xl overflow-hidden
                  flex flex-col lg:flex-row">

    {/* Book Cover — full width on mobile, fixed sidebar on desktop */}
    <div className="w-full lg:w-[300px] lg:flex-none bg-base-200 flex items-center justify-center p-6">
      <img
        src={expectedBook.book_image}
        alt={expectedBook.book_name}
        className="w-36 lg:w-full rounded-md object-cover aspect-[2/3]"
      />
    </div>

    {/* Book Info */}
    <div className="flex-1 p-6 lg:p-7 flex flex-col gap-0 min-w-0">

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mb-3">
        {expectedBook.tags.map((tag, i) => (
          <span key={i}
            className="text-xs font-medium px-3 py-1 rounded-full
                       bg-green-50 text-green-700 border border-green-300">
            {tag}
          </span>
        ))}
      </div>

      {/* Title & Author */}
      <h1 className="text-xl lg:text-2xl font-semibold text-base-content mb-1">
        {expectedBook.book_name}
      </h1>
      <p className="text-sm text-base-content/60 mb-1">by {expectedBook.by_writer}</p>
      <p className="text-xs text-base-content/40 italic mb-4">{expectedBook.genre}</p>

      {/* Review */}
      <div className="border-t border-base-200 pt-3 mb-4">
        <p className="text-sm text-base-content/70 leading-relaxed">
          {expectedBook.review}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        {[
          { label: "Pages",     value: expectedBook.number_of_pages },
          { label: "Rating",    value: `${expectedBook.rating} ★`, amber: true },
          { label: "Publisher", value: expectedBook.publisher },
          { label: "Published", value: expectedBook.year_of_publishing },
        ].map(({ label, value, amber }) => (
          <div key={label} className="bg-base-200 rounded-xl px-3 py-2">
            <p className="text-xs text-base-content/40 mb-0.5">{label}</p>
            <p className={`text-sm font-medium ${amber ? "text-amber-600" : "text-base-content"}`}>
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-auto">
        <button className="btn btn-outline flex-1">Read</button>
        <button className="btn flex-1 bg-green-600 hover:bg-green-700 text-white border-none">
          + Wishlist
        </button>
      </div>

    </div>
  </div>
);


    </div>
    );
};

export default BookDetails;