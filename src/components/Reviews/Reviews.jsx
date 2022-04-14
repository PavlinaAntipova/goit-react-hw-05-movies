import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

import { fetchReviewById } from 'services/movie-api';

import s from './Reviews.module.css'

export default function Review() {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    fetchReviewById(id).then(data => {
      setReviews(data.results);
    });
  }, [id]);

    
  return (
  <>
    { reviews === null || reviews.length === 0 ? <p>There are no reviews :(</p> : <ul>
      {reviews.map(review => <li className={s.item} key={review.id}>
        <p className={s.name}>{review.author}</p>
        <p className={s.text}>{review.content}</p>
      </li>)}
       </ul>}
      </>
      
  );
};