import React, { useContext } from "react";
import { BookContext } from "../../../Context/HomeContext";
import ListedBookCard from "../ListedBookCard/ListedBookCard";


const ListedReadBooks = () => {
    const { storedBook } = useContext(BookContext);

    return (
        <div className="p-4">
            {storedBook.length === 0 ? (
                <div className="text-center py-16 text-base-content/40">
                    <p className="text-5xl mb-3">📚</p>
                    <p className="text-lg font-medium">No books marked as read yet.</p>
                </div>
            ) : (
                storedBook.map((book, ind) => (
                 <ListedBookCard key={ind} book={book} />
                  // ✅ simple card
                ))
            )}
        </div>
    )
}

export default ListedReadBooks;