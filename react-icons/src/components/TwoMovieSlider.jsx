import "./TwoMovieSlider.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import data from "../data";

const TwoMovieSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect( () => {
        if (index < 0)
        {
            setIndex(data.length - 1);
        } 
        else if (index > data.length - 1)
        {
            setIndex(0);
        }
    }, [index]);

    useEffect( () => {
        let setIntervalID = setInterval( () => {
            setIndex(index + 1);
        }, 3000);
        return () => clearInterval(setIntervalID);
    }, [index]);

    return (
        <section className="all-movies">
            <div className="all-movies-content">
                {data.map((oneMovie, twoMovieIndex) => {
                    const { id, image, title, age, tags, description } = oneMovie;
                    let mainClass = "next-slide";

                    if (twoMovieIndex === index)
                    {
                        mainClass = "active-slide";
                    }
    
                    if (twoMovieIndex === index - 1 || (index === 0 && twoMovieIndex === data.length - 1))
                    {
                        mainClass = "last-slide";
                    }
    
                    return (
                        <article className={mainClass} key={id}>
                            <img src={image} alt="" />
                            <h2>{title}</h2>
                            <p>{age}</p>
                            <p>{tags}</p>
                            <p>{description}</p>
                        </article>
                    );
                })}
            </div>
            <button onClick={ () => setIndex(index - 1)}>
                <FaArrowAltCircleLeft />
            </button>
            <button onClick={ () => setIndex(index + 1)}>
                <FaArrowAltCircleRight />
            </button>
        </section>
    );
}
export default TwoMovieSlider;