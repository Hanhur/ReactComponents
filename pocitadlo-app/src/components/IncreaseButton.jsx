
import "./IncreaseButton.css";

const IncreaseButton = (props) => {
    return (
        <button className="btn" type="button" onClick={props.increase}>Zvysit o 1</button>
    );
}

export default IncreaseButton;