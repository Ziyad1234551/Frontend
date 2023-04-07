import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import data from "../../utils/constant/data";
import { nanoid } from "nanoid";
import { useState } from "react";

function Movies() {
  const [movies,setMovies] = useState(data);

  function handleClick(){
    const movie = {
    id:nanoid(),
    title: "Jigsaw Spiral",
    year: 2021,
    type: "Movie",
    poster: "https://picsum.photos/300/400",
    };
    setMovies([...movies,movie])
  }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {
            movies.map((movie)=>{
              return <Movie key={movie.id} movie={movie}/>
            })

          }
          <button onClick={handleClick}>Add Movie</button>

      </div>
      </section>

      </div>
  )
}
export default Movies;