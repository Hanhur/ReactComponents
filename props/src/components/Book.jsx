import PropTypes from "prop-types";
import defaultImage from "../images/book-default.jpg";

const Book = ({ id, image, title, price }) => {
    return (
        <div key={id}>
            <h2>{title || "Defaultni nazev"}</h2>
            <img src={image || defaultImage} alt="" />
            <p>{price || 1000} Kč</p>
        </div>
    );
};

Book.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Book;
