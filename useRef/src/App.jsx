import { useRef } from "react";

const App = () => {
    const refInput = useRef(null);
    const refHeading = useRef(null);
    const refLink = useRef(null);

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(refInput.current.value);
        console.log(refInput.current.style.backgroundColor = "red");
        console.log(refInput.current.style.color = "white");
        console.log(refHeading.current.style.color = "orange");
        console.log(refHeading.current.textContent = "nony text");
        console.log(refLink.current.textContent = "SEZNAM.CZ");
        console.log(refLink.current.href = "https://www.seznam.cz");
    }

    return (
        <div>
            <h1 ref={refHeading}>Formular</h1>
            <form onSubmit={formSubmit}>
                <input type="text" ref={refInput}/><br />
                <input type="submit"/>
            </form>
            <a ref={refLink} href="https://www.google.com">GOOGLE</a>
        </div>
    );
}

export default App;