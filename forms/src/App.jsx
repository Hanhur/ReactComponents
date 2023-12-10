import { useState } from "react";

// Spread operator
// Spojování polí
// const studentsGroup = ["David", "Jana", "Martina"];
// const allStudents = ["Harry", "Ron", ...studentsGroup, "Hermiona"];
// console.log(allStudents);
// // Výsledek: ['Harry', 'Ron', 'David', 'Jana', 'Martina', 'Hermiona'];
// // argumenty funkcí
// const numbers = [1, 5, 3]
// const multipleNumbers = (a, b, c) => {
//     console.log(a * b * c);
// }
// multipleNumbers(...numbers);
// // Výsledek: 15
// // Kopírování polí
// const students1 = ["Jan", "Monika", "Dalibor"];
// const students2 = students1;
// students2.push("Pavel");
// console.log(students2);
// console.log(students1);
// // Výsledek: ['Jan', 'Monika', 'Dalibor', 'Pavel'];
// // Výsledek: ['Jan', 'Monika', 'Dalibor', 'Pavel'];
// const students3 = ["Jan", "Monika", "Dalibor"];
// const students4 = [...students3];
// students4.push("Pavel");
// console.log(students3);
// console.log(students4);
// // Výsledek: ['Jan', 'Monika', 'Dalibor'];
// // Výsledek: ['Jan', 'Monika', 'Dalibor', 'Pavel'];
// // další spojování
// const names1 = ["David", "Martin"];
// const names2 = ["Jana", "Pavla"];
// const newArray1 = names1.concat(names2);
// console.log(newArray1);
// const newArray2 = [...names1, "Dana", ...names2];
// console.log(newArray2);
// // Výsledek: ['David', 'Martin', 'Jana', 'Pavla'];
// // Výsledek: ['David', 'Martin', 'Dana', 'Jana', 'Pavla'];

// // Rest operátor
// const sum = (...allNumbers) => {
//     let result = 0;
//     for (const oneNumber of allNumbers)
//     {
//         // result = result + oneNumber;
//         result += oneNumber;
//     }
//     return result;
// }
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 5, 10));
// console.log(sum(1, 2, 10, 10, 10));

const App = () => {
    const [firsName, setFirsName] = useState("");
    const [names, setNames] = useState([]);

    const formSubmit = (event) => {
        event.preventDefault(); // Vypnut defaltni chovani

        if(firsName) 
        {
            setNames((names) => {
                return [...names, firsName];
            });
        }
        else 
        {
            console.log("Nebylo nic");
        }
        setFirsName("");
    }

    return (
        <article>
            <form onSubmit={formSubmit}>
                <input 
                    className="userName" 
                    type="text" 
                    placeholder="Name" 
                    value={firsName}
                    onChange={(event) => setFirsName(event.target.value)}
                />
                <input type="submit"/>
            </form>
            {
                names.map((oneName, index) => {
                    return (
                        <p className="item" key={index}>{oneName}</p>
                    );
                })
            }
        </article>
    );
}

export default App;