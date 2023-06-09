import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import styled from "styled-components";

const StyledMovie = styled.div`
  margin-bottom: 1rem;

img {
  border-radius: 25px;
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

h3 {
  color: #4361ee;
  font-size: 1.95rem;
  margin-bottom: 0.5rem;
}

p {
  color: #64748b;
}

@media (min-width: 768px) {
  flex-basis: 50%;
}

@media (min-width: 992px) {
  flex-basis: 25%;
  padding: 1rem;
}
`;
// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>

      <img src={movie.poster ||`https://image.tmdb.org/t/p/w300/${movie.poster_path}` } alt={movie.title}/>
     <Link to={`/movie/${movie.id}`} >
      
      <h3>{movie.title}</h3>
     </Link>
      <p>{movie.year}</p>
    
    </StyledMovie>
  );
}

export default Movie;
