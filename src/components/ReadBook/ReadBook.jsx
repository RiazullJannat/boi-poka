import PropTypes from "prop-types";
const ReadBook = ({book}) => {
    const { image, bookName, author, tags, category, rating, bookId } = book;
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};
ReadBook.propTypes={
    book:PropTypes.object.isRequired
}
export default ReadBook;