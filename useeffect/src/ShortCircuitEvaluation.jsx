
const ShortCircuitEvaluation = () => {
    // const value = 90;
    // const value2 = "Mango";

    // const result1 = value && value2;
    // const result2 = value || value2;

    const error = false;

    return (
        <div>
            {/* <h1>{result1}</h1>
            <h1>{result2}</h1> */}
            {
                error ? <p>Chyba</p> : <dir>
                    <h2>Obsah stranky</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Labore officia odio debitis! Dolore ipsum voluptatum, 
                        quis odio necessitatibus laudantium, libero fugit harum, 
                        vero magni commodi? Dolores id similique nobis ex?
                    </p>
                </dir>
            }
        </div>
    );
}
export default ShortCircuitEvaluation;