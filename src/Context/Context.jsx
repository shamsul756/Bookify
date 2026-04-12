import React, { useState } from "react";
import { BookContext } from "./HomeContext";
import { toast } from "react-toastify";

const Context = ({ children }) => {
    const [storedBook, setStoredBook] = useState([])
    const [wishList, setWishList] = useState([])

    const handleMarkasRead = (currentBook) => {
        // ✅ check must be INSIDE the function
        const isExistBook = storedBook.find(book => book.id === currentBook.id)
        
        // ✅ check wishlist too — can't mark as read if already in wishlist
        const isExistInWishList = wishList.find(book => book.id === currentBook.id)

        if (isExistBook) {
            toast.error(`${currentBook.book_name} is already in your read list!`)
        } else if (isExistInWishList) {
            toast.error(`${currentBook.book_name} is already in your wish list!`)
        } else {
            setStoredBook([...storedBook, currentBook])
            toast.success(`${currentBook.book_name} added to your read list!`)
        }
    }

    const handleWishList = (currentBook) => {
        const isExistInReadList = storedBook.find(book => book.id === currentBook.id)
        const isExistBook = wishList.find(book => book.id === currentBook.id)

        if (isExistInReadList) {
            toast.error(`${currentBook.book_name} is already in your read list!`)
        } else if (isExistBook) {
            toast.error(`${currentBook.book_name} is already in your wish list!`)
        } else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.book_name} added to your wish list!`)
        }
    }

    const data = {
        storedBook,
        setStoredBook,
        handleMarkasRead,
        wishList,
        setWishList,
        handleWishList
    }

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    )
}

export default Context;