import { Link, useLocation } from "react-router-dom";

import s from './MovieCard.module.css'

export default function MovieCard({ movieInfo, searchParams }) {
    const location = useLocation();
    const { poster_path, title, id, vote_average } = movieInfo;
    const path = location.pathname === '/' ? 'movies' : location.pathname;

    return (
        <Link className="gridItem" to={`${path + '/' + id}`} state={{ from: location.pathname, query: searchParams }}><li>
            <div className={s.img}>
                <img src={poster_path ? `https://image.tmdb.org/t/p/w780/${poster_path}` : 'https://cdn.pixabay.com/photo/2017/01/25/17/35/camera-2008489_1280.png'} alt={title} width='100' />
            </div>
                <span className={s.rating}>{vote_average}</span>
        </li></Link>
    
 
  );
};

