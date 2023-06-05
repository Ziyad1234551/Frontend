import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import axios from "axios";

function NowPlayingMovie() {
   const API_KEY =process.env.REACT_APP_API_KEY;
 const url = `https://api.themoviedb.org/3/movie/now_playing/?api_key=${API_KEY}`;

 const[movies,setMovies] = useState([]);
useEffect(()=>{
  getPopularMovies();

},[]);


 async function getPopularMovies(){
  const response = await axios.get(url);
  setMovies(response.data.results);
 }  
  return (

    <>
      <Hero/>
      <Movies movies={movies}/>
    </>
  );
}

export default NowPlayingMovie;