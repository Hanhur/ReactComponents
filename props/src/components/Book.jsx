import PropTypes from "prop-types";
import defaultImage from "../images/book-default.jpg";

const Book = ({image, title, price}) => {
    return (
        <div>
            <h2>{title || "Defaultní název"}</h2>
            <img src={image || defaultImage} alt="" />
            <p>{price || 1000} Kč</p>
        </div>
    );
}

Book.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

// Book.defaultProps = {
//     image: defaultImage,
//     title: "Defaultní název",
//     price: 1000,
// }

export default Book;