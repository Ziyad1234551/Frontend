import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import { useEffect,useState } from "react";
function PopularMovie() {
 const API_KEY =process.env.REACT_APP_API_KEY;
 const url = `https://api.themoviedb.org/3/movie/popular/?api_key=${API_KEY}`;

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

export default PopularMovie;
