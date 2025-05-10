import { useState } from 'react';

const App = () => {
    const [firstName, setFirstName] = useState("");
    const [names, setNames] = useState([]);

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(firstName);

        if (firstName)
        {
            setNames((names) => {
                return [...names, firstName]
            });
        } 
        else 
        {
            console.log("Nebylo nic vyplněno");
        }
        setFirstName("");
    }

    return (
        <article>
            <form onSubmit={formSubmit}>
                <input 
                    className="userName" 
                    type="text" 
                    placeholder="Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <input type="submit"/>
            </form>
            {
                names.map((oneName, index) => {
                    return <p className="item" key={index}>{oneName}</p>
                })
            }
        </article>
    );
}

export default App;
// lesson 9