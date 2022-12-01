import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import {Link} from 'react-router-dom';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage.js";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularMoviesPage from "./pages/popularMoviesPage.js";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage.js";
import TrendingMoviesPage from "./pages/trendingMoviesPage.js";
import SimilarMoviesPage from "./pages/similarMoviesPage.js";
import MovieActorsPage from "./pages/movieActorsPage.js";
import MovieActorDetailsPage from "./pages/movieActorDetailsPage";
import FavouriteMovieActorsPage from "./pages/favouriteMovieActorsPage";
import MovieActorContextProvider from "./contexts/movieActorContext";

//Immediately after the import statements, declare the query client (it will manage the cache in the browser)
//The above configuration will retain all data in the cache for 1 hour before it becomes invalidated.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />      {/* New Header  */}
      <MoviesContextProvider>
        <MovieActorContextProvider>
      <Routes>
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        {/* page=:pageNumber */}
        <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/popular" element={<PopularMoviesPage />} />
        <Route path="/movies/toprated" element={<TopRatedMoviesPage />} /> 
        <Route path="/movies/trending" element={<TrendingMoviesPage />} />
        <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
        <Route path="/actors/" element={<MovieActorsPage />} />
        <Route path="/actors/:id" element={<MovieActorDetailsPage />} />
        <Route path="/actors/favourites" element={<FavouriteMovieActorsPage />} />
      </Routes>
      </MovieActorContextProvider>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );