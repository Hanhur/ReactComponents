import { useState } from "react";
import "./Question.css";

const Question = ({ title, info }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="one-question">
            <section>
                <h2>{title}</h2>
                <button onClick={() => setShow(!show)}>Odpověď</button>
            </section>
            {show && <p>{info}</p>}
        </div>
    );
}
export default Question;