import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import { useEffect,useState } from "react";
import ENDPOINTS from "../../ENDPOINT";
function PopularMovie() {
 const API_KEY =process.env.REACT_APP_API_KEY;
 const url = ENDPOINTS.POPULAR;

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
