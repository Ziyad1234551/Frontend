import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import ENDPOINTS from "../../ENDPOINT";


function NowPlayingMovie() {
 const url = ENDPOINTS.NOW_PLAYING;

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