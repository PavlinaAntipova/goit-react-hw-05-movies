import { Link } from "react-router-dom";

import shapeOne from 'img/shape-1.svg';
import shapeTwo from 'img/shape-2.svg';
import cartoon from 'img/cartoon.jpg';
import goodDay from 'img/good-day.svg';
import star from 'img/star.svg';
import arrow from 'img/arrow.svg';

import s from './pages.module.css'

export default function NotFoundPage() {
  
    return (
      <div className={s.NotFoundPage}>
        <p className='mainText'>There is <span className='mainText__highlight'>no match</span> :( <br/> Try again!</p>
        <Link className="goBackBtn" to='/goit-react-hw-05-movies'>Go Home</Link>
        <img className={s.NotFoundPage__shapeOne} src={shapeOne} alt=''/>
        <img className={s.NotFoundPage__shapeTwo} src={shapeTwo} alt=''/>
        <img className={s.NotFoundPage__goodDay} src={goodDay} alt=''/>
        <img className={s.NotFoundPage__star} src={star} alt=''/>
        <img className={s.NotFoundPage__arrow} src={arrow} alt=''/>
        
        <div className={s.NotFoundPage__img} ><img src={cartoon} alt="cartoon" /></div>
        
        </div>
   
  );
};