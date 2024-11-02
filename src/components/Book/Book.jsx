import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Book = ({ book }) => {
    const { image, bookName, author, tags, category, rating, bookId } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="p-6 border rounded-xl">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="py-4 bg-gray-400 rounded-xl">
                        <img
                            src={image}
                            className="h-[166px]"
                            alt={bookName} />
                    </figure>
                    <div className="card-body ">
                        <div className="">
                            {
                                tags.map((tag, ind) => <button className="btn btn-xs" key={ind}>{tag}</button>)
                            }
                        </div>  
                        <h2 className="card-title">
                            {bookName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>By: {author}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{category}</div>
                            <div className="rating">
                                <p>{rating}</p>
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
Book.propTypes={
    book:PropTypes.object.isRequired
}

export default Book;