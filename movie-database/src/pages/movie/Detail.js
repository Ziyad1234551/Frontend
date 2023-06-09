import React, { useEffect, useState } from 'react'
import DetailMovie from './DetailMovie'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Movies from '../../components/Movies/Movies';
import Movie from '../../components/Movie/Movie';
import ENDPOINTS from '../../ENDPOINT';

const Detail = () => {
    const [movies, setMovies] = useState([]);
    const {id} = useParams();
    const API_KEY = process.env.REACT_API_KEY;

    useEffect(()=>{
        getRecomendationMovie();
    },)

    async function getRecomendationMovie(){
      
        const response = await axios(ENDPOINTS.REKOM(id));
        setMovies(response.data.results);
        console.log("iya",movies);
    }
    
    
  return (
      <div>
        <DetailMovie/>
        <Movies movies={movies}/>
    </div>


  )
}

export default Detail