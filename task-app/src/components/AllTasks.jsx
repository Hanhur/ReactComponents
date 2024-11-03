import { useState } from "react";
import data from "../data";
import "./AllTasks.css";

const AllTasks = () => {
    const [myTask, setMyTask] = useState(data);

    const tasksHandler = (id) => {
        const filteredTasks = myTask.filter((oneTask) => {
            return oneTask.id !== id;
        });
        setMyTask(filteredTasks);
    }

    const allDeleteHandler = () => {
        setMyTask([]);
    }

    return (
        <div>
            {
                myTask.map((oneTask) => {
                    const {id, name} = oneTask;
                    return (
                        <div key={id} className="one-task">
                            <h2>{name}</h2>
                            <button type="button" onClick={() => tasksHandler(id)}>Vymazat</button>
                        </div>
                    );
                })
            }
            <button className="main-button" type="button" onClick={allDeleteHandler}>Vse vymazat</button>
        </div>
    );
}

export default AllTasks;