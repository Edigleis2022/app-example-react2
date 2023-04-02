import { useState } from 'react';
import { movies } from "./data"
export function Gallery() {

    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(index + 1);
    }
    let movie = movies[0]


    return (
        <>
            <h2 className="titulo">
                <i>{movie.title} </i>
                by {movie.releaseDate}
            </h2>

            <section className="gallery">
                <img src={movie.images.poster} />
            </section>

            <button className="botão_proximo" onClick={handleClick}>Anterior</button>
            <button className="botão_anterior" onClick={handleClick}>Próxima</button>

        </>
    )
}