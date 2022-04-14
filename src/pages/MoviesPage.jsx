import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

import SearchMovieForm from 'components/SearchMovieForm';
import MovieCard from 'components/MovieCard';
import Container from 'components/Container';
import NotFoundPage from './NotFoundPage';

import { fetchByQuery } from 'services/movie-api';

import s from './pages.module.css'

export default function MoviesPage() {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState(null);
  const [correctQuery, setCorrectQuery] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!query && !searchParams.get('query')) {
      return;
    }
    fetchByQuery(searchParams.get('query')).then(data => {
      if (!data.results.length) {
        setCorrectQuery(false);
        return;
      }
      setMovies(data.results);
      setCorrectQuery(true);
    });
  }, [query, searchParams]);
   
  return (
    <Container>
    <div className={s.MoviesPage}>
        <SearchMovieForm setQuery={setQuery} setSearchParams={setSearchParams} />

        
        {correctQuery ? <> {movies ? <ul className='gridContainer'> {movies.map(movie => <MovieCard key={movie.id} movieInfo={movie} searchParams={searchParams.get('query')} />)}
        </ul> : <p className='mainText'>Here you can find movies <br /> that you want ;)</p>}
        </> : <NotFoundPage />}
        
    </div>
      </Container>
  );
};