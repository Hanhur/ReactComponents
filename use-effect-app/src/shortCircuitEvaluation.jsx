// Short circuit evaluation

const App = () => {
    const value = "david";
    const value2 = "harry";

    const result1 = value && value2;
    // první je true a druhé jakékoli = se vrací druhá hodnota
    // první je false a druhé jakékoli = vrací se první hodnota
    console.log(result1);

    const result2 = value || "tomas";
    // první je true a druhé jakékoli = vrací první
    // první je false, tak vrací druhou
    console.log(result2);

    const error = true;
    
    return(
        <div>
            <h1>{value2 || "Defaultní text"}</h1>
            {
                value2 && <h1>Super tajný nadpis</h1>
            }

            {
                error ? <p>Chyba</p> : <div>
                    <h2>Obsah stránky</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio facilis a asperiores ut eaque, sunt reprehenderit expedita
                        labore recusandae, perspiciatis error aliquid laudantium, itaque quo.
                        Dolore ut veritatis a ratione?
                    </p>
                </div>
            }
        </div>
    );
}

export default App;
