
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(()=> import("./Layout"));
const HomePage = lazy(()=> import("pages/HomePage"));
const MoviesPage = lazy(()=> import("pages/MoviesPage"));  
const MovieDetailsPage = lazy(()=> import("pages/MovieDetailsPage"));  
const Cast = lazy(()=> import("./Cast"));  
const Reviews = lazy(()=> import("./Reviews"));  
const NotFoundPage = lazy(()=> import('pages/NotFoundPage'));  



export const App = () => {
  return (
     
    <Routes>
  
      <Route path='/' element={<Layout />}>
       
          <Route index element={<HomePage />} />
        
        <Route path='movies' element={<MoviesPage />} />
        <Route path='movies/:id' element={<MovieDetailsPage />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
         
        </Route>

      </Routes>
     
    
  );
};
