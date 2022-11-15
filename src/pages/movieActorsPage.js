import React from "react";
import PageTemplate from "../components/templateMovieActorsListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovieActors} from '../api/tmdb-api'

const MovieActorsPage = (props) => {
    const {data, error, isLoading, isError}  = useQuery('actors', getMovieActors)
  
    if (isLoading){
       return <Spinner/>
    }
    if (isError) {
      return <h1>{error.message}</h1>
    }
      const actors = data.results;
   
    return (
      <PageTemplate
        title="Movie Actors"
        actors={actors}
      />
    );
  };
  export default MovieActorsPage; 