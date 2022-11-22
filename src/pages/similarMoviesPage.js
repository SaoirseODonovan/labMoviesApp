// //same as trendingMoviesPage
// import React from "react";
// import PageTemplate from "../components/templateMovieListPage";
// import { useQuery } from 'react-query';
// import Spinner from '../components/spinner';
// import AddToPlaylistIcon from '../components/cardIcons/addToMustWatch';
// import {getSimilarMovies} from '../api/tmdb-api';

// const SimilarMoviesPage = (props) => {
//     const {data, error, isLoading, isError}  = useQuery('similar', getSimilarMovies)
  
//     if (isLoading) return <Spinner/>
//     if (isError) return <h1>{error.message}</h1>
//     const movies = data.results;
//     const favorites = movies.filter(m => m.favorite)
//     localStorage.setItem('favorites', JSON.stringify(favorites))
  
//     const mustWatch = movies.filter(m => m.mustWatch)
//     localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  
//     return (
//       <PageTemplate
//         title="Similar Movies"
//         movies={movies}
//         action={(movie) => {
//           return <AddToPlaylistIcon movie={movie} />
//       }}
//       />
//     );
//   };
//   export default SimilarMoviesPage; 

import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getSimilarMovies} from '../api/tmdb-api'
import AddToPlaylistIcon from '../components/cardIcons/addToMustWatch';
import { useParams } from 'react-router-dom';



const SimilarMoviesPage = (props) => {
  const { id } = useParams();

  const { data: similar, error, isLoading, isError } = useQuery(
    ["similar", { id: id }],
    getSimilarMovies
  );
  console.log(similar)
  // const {data, error, isLoading, isError}  = useQuery('similar', getSimilarMovies)
  if (isLoading) return <Spinner/>
  if (isError) return <h1>{error.message}</h1>
   const movies = similar;
  // // console.log(data)
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

  return (
    <>
      {similar ? (
        <>
          <PageTemplate 
          title="Similar Movies"
          movie={similar}>
            {/* <MovieDetails movie={movie} /> */}
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default SimilarMoviesPage;


