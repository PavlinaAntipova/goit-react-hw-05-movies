import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import s from './Cast.module.css'

import { fetchCastById } from 'services/movie-api';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    fetchCastById(id).then(setCast);
  }, [id]);

  const filterCast = () => {
    return cast.cast.slice(0, 5);
  }
    
  return (
      
      <ul className={s.list}>
      {cast !== null && filterCast().map(actor => <li className={s.item} key={actor.cast_id}>
        <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w780/${actor.profile_path}` : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'} alt={actor.name} />
        <h3 className={s.name}>{actor.name}</h3>
        
      </li>)}
       </ul>
  );
};