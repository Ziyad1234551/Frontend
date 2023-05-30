import styles from "./Movie.module.css";
import styled from "styled-components";

const StyledMovie = styled.div`
  margin-bottom: 1rem;
  margin:auto;
  

  img{
  border-radius: 25px;
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
  }
  h3{
  color: #4361ee;
  font-size: 1.95rem;
  margin-bottom: 0.5rem;
  }
  p{
    color: #64748b;

  }
  /* Medium Screen */
@media (min-width: 768px) {
  .movie {
    flex-basis: 50%;
  }
}

/* Large Screen */
@media (min-width: 992px) {
  .movie {
    flex-basis: 25%;
    padding: 1rem;
  }
}

`;
// Component Movie menerima props
function Movie(props) {
  // Melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>

      <img src={movie.poster} alt={movie.title}/>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    
    </StyledMovie>
  );
}

export default Movie;
