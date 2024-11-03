import OrderButton from "./OrderButton";
import "./Book.css";

const Book = (props) => {
    return (
        <div className="one-book">
            <img src={props.image} alt="" />
            <h1 className="main-heading">{props.title}</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas assumenda voluptatem recusandae atque libero aliquam vero dolore in officiis doloribus dolorum impedit accusantium, maxime esse commodi ducimus modi? Similique, perferendis.
            </p>
            <OrderButton/>
        </div>
    );
}

export default Book;