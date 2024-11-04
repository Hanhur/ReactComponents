import "./ResetButton.css";

const ResetButton = (props) => {
    return (
        <button className="btn" type="button" onClick={props.reset}>Reset na 0</button>
    );
}

export default ResetButton;