import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";
const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('/data/booksData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className="my-10">
            <h2 className="font-bold text-4xl text-center">Books</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-4">
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;