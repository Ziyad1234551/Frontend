import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Button from "../Button";
import styled from "styled-components";
function Hero() {
  const [movie,setMovie] = useState("");

  async function fetchMovie(){
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  
  }
   useEffect(()=>{
    fetchMovie();
   },[]);


   console.log(movie)
   const HeroStyle= styled.div`
  margin: 5rem auto;
  padding: 1rem;
  display: flex;
   
   `
   const SectionStyle = styled.section`
   display: flex;
   text-align: center;
   flex-direction: row;

   
   .hero__left{
    margin-bottom: 1rem;

  }
  .hero__right{
    flex-basis: 60%;

  }
  h2{
    color: #4361ee;
  margin-bottom: 1rem;
  font-size: 2.44rem;
  }
  h3{
    color: #b5179e;
  margin-bottom: 1rem;
  font-size: 1.59rem;
  }
  p{
    color: #64748b;
  margin-bottom: 1rem;
  }
  img{
  max-width: 100%;
  height: auto;
  border-radius: 25px;
  }
   `;

  return (
    <HeroStyle>
      <SectionStyle >
        <div className="hero__left">
          <h2>{movie.Title}</h2>
          <h3>
           {movie.Genre}
          </h3>
          <p>
           {movie.Plot}
          </p>
          <Button variant="primary" size="md">Watch</Button>



        </div>
        <div className="hero__right">
          <img
            src= {movie.Poster}
            alt="placeholder"
          />
        </div>
      </SectionStyle>
    </HeroStyle>
  );
}

export default Hero;
