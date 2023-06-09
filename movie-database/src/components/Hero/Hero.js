import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Button from "../Button";
import styled from "styled-components";
import axios from "axios";
import ENDPOINTS from "../../ENDPOINT";
function Hero() {
  const [movie,setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;


  async function getTrendingMovie() {
    const url = ENDPOINTS.TRENDING;
    const response = await axios(url);
    return response.data.results[0];
  }
async function getDetailMovie() {
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(url);
    setMovie(response.data);
  }
useEffect(()=>{
  getDetailMovie();
});

   console.log(movie)
   const HeroStyle= styled.div`
 margin: 5rem auto;
  padding: 1rem;

  @media screen and (min-width: 992px) {
    max-width: 1200px;
  }
`;
   
  
   const SectionStyle = styled.section`
   display: flex;
  flex-direction: column;
  text-align: center;

  .hero__left {
    margin-bottom: 1rem;
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  @media screen and (min-width: 769px) {
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    .hero__left {
      flex-basis: 40%;
    }
  }
`;

  return (
    <HeroStyle>
      <SectionStyle >
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>
           how to show all genre?
          </h3>
          <p>
           {movie.overview}
          </p>
          <Button variant="primary" size="md">Watch</Button>



        </div>
        <div className="hero__right">
          <img
            src= {`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="placeholder"
          />
        </div>
      </SectionStyle>
    </HeroStyle>
  );
}

export default Hero;