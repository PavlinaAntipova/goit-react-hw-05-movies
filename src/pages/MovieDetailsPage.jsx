import { useState, useEffect } from 'react';
import { Link, NavLink, useParams, Outlet, useLocation } from 'react-router-dom';


import { fetchMovieById } from '../services/movie-api'

import s from './pages.module.css'

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(id).then(setMovie);
  }, [id]);

  const checkState = () => {
    const condition = location.state?.from && location.state?.query;

    return { from: condition ? `${location.state.from}` : '/', query: condition ? location.state.query : '' }
  }

  const className = isActive => isActive ? `${s.MovieDetailsPage__link} ${s.MovieDetailsPage__activeLinks}` : s.MovieDetailsPage__link;

  return (
    
    movie !== null && <div className={s.MovieDetailsPage}>
      
      <div className={s.MovieDetailsPage__wrraper}>
        <div className={s.MovieDetailsPage__img}><img src={movie.poster_path ? `https://image.tmdb.org/t/p/w780/${movie.poster_path}` : 'https://cdn.pixabay.com/photo/2017/01/25/17/35/camera-2008489_1280.png'} alt={movie.title} /></div>
      <Link className='goBackBtn' to={location.state?.from && location.state?.query ? `${location.state.from}?query=${location.state.query}` : '/'}>Go back</Link>
      </div>

      <div className={s.MovieDetailsPage__info}>
        <ul className={s.MovieDetailsPage__genres}>
        {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
        <h2 className={s.MovieDetailsPage__title}>{movie.title}</h2>
        
      <span className={s.MovieDetailsPage__rating}>{movie.vote_average}</span>
      <h3 className={s.MovieDetailsPage__overview}>Overview</h3>
      <p className={s.MovieDetailsPage__text}>{movie.overview }</p>
      
        <div className={s.MovieDetailsPage__links}>
      <NavLink className={({isActive})=> className(isActive)} to='cast' state={checkState()}>Cast</NavLink>
        <NavLink className={({isActive})=> className(isActive)} to='reviews' state={checkState()}>Reviews</NavLink>
         
        </div>
        <div className={s.MovieDetailsPage__outlet}>
           <Outlet/>
        </div>
        
      </div>
      </div>
      
   
  );
};