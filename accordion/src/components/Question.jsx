import "./Question.css";
import { useState } from "react";

const Question = ({title, info}) => {
    const [show, setShow] = useState(false);

    return (
        <div className="one-question">
            <section>
                <h2>{title}</h2>
                <button type="button" onClick={() => setShow(!show)}>Odpoved</button>
            </section>
            {show && <p>{info}</p>}
        </div>
    );
}

export default Question;
