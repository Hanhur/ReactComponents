import "./ResetButton.css";

const ResetButton = (props) => {
    return (
        <div>
            <button className="btn" onClick={props.reset}>Reset na 0</button>
        </div>
    );
}

export default ResetButton;
