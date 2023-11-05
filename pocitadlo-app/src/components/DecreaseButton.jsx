import "./DecreaseButton.css";

const DecreaseButton = (props) => {
    return (
        <div>
            <button className="btn" onClick={props.decrease}>Snížit o 1</button>
        </div>
    );
}

export default DecreaseButton;
