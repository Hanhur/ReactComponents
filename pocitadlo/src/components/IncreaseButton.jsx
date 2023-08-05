import "./IncreaseButton.css";

const IncreaseButton = (props) => {
    return (
        <div>
            <button className="btn" onClick={props.increase}>Zvýšit o 1</button>
        </div>
    );
}
export default IncreaseButton;