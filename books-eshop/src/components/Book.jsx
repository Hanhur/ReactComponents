import "./Book.css";
import OrgerButton from "./OrgerButton";

const Book = (props) => {
    return (
        <div className="one-book">
            <img src={props.myimage} alt="" />
            <h2 className="main-heading">{props.mytitle}</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit est placeat tenetur animi voluptate eos reprehenderit atque, 
                temporibus et iste nulla excepturi nam tempora eveniet sed impedit nesciunt maxime laudantium!
                Blanditiis minima eum aspernatur voluptatibus asperiores consectetur rerum praesentium voluptatem. 
                Reiciendis vero optio dolorem nostrum voluptate nisi iure laboriosam quam a vitae labore obcaecati quas illum accusantium, 
                quis aut perferendis?
            </p>
            <OrgerButton />
        </div>
    );
}

export default Book;
