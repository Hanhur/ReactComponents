
import "./DecreaseButton.css";

const DecreaseButton = (props) => {
    return (
        <button className="btn" type="button" onClick={props.decrease}>Snizit o 1</button>
    );
}

export default DecreaseButton;