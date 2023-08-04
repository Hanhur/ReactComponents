import OrderButton from './OrderButton';
import './Book.css';

const Book = (props) => {
    return (
        <div className="one-book">
            <img src={props.myimage} alt="" />
            <h2 className="main-heading">{props.mytitle}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consectetur id sapiente, perspiciatis unde aperiam ipsam esse laborum! Quae, 
                distinctio repellat error numquam sint, et qui provident repudiandae amet est aliquam.
            </p>
            <OrderButton />
        </div>
    );
}
export default Book;