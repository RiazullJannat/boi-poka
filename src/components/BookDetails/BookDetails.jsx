import { useLoaderData, useParams } from "react-router-dom";
import { addReadList } from "../../utlities/readList/readList";
const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const bookData = data.find(book => book.bookId === parseInt(bookId));
    const { image, bookName, author, tags, category, review } = bookData;
    const handleReadList=(id)=>{
        addReadList(id);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6">By: {author}</p>
                    <p>{category}</p>
                    <p><span>Review: </span>{review}</p>
                    <div className="">
                        {
                            tags.map((tag, ind) => <span key={ind}>Tag: <button className="btn btn-xs">#{tag}</button></span>)
                        }
                    </div>
                    <div className="flex justify-between">
                        <button className="btn btn-primary" onClick={()=>handleReadList(bookId)}>Read</button>
                        <button className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;