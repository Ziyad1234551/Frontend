import { nanoid } from "nanoid";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { useSelector } from "react-redux";
function Movies({title}) {
  // Destructing props: state movies
  const movies = useSelector((store)=> store.movies.movies)
  

 

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>Latest Movies</h2>
          <div className={styles.movie__container}>
          {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Movies;
