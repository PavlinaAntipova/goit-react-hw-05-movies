import { useState, useEffect } from 'react';

import MovieCard from "components/MovieCard";
import Container from 'components/Container';

import {fetchTrendingMovie} from 'services/movie-api'

export default function HomePage() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetchTrendingMovie().then(data => {
            setMovies(data.results);
        });
    }, []);

    return ( <Container>
        <h2 className='mainText'>Here you can find <br/>the latest <span className='mainText__highlight'>trending movies</span></h2>
        <ul className='gridContainer'>
            {movies && movies.map(movie => <MovieCard key={movie.id} movieInfo={movie}/>)}
        </ul>
        </Container>
 
  );
};