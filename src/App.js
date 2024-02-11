import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../src/Home";
import SingleMovie from "../src/SingleMovie";
import Error from "../src/Error";
import './App.css';
import Movie from './Movies';
import SingleLatestMovie from './SingleLatestMovie';
import SingleLatestTvSeries from './SingleLatestTvSeries';
import IMDBMovies from './IMDBMovies';
import IMDBMovieid from './IMDBMovieid';

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/searchItems" element={<Movie></Movie>}/>
      <Route path="movie/searchItems/:id" element={ <SingleMovie/> } />
      <Route path="movie/:id/" element={<SingleLatestMovie/>}/>
      <Route path='/tvseries/:id' element={<SingleLatestTvSeries/>}/>
      <Route path='/topimdb' element={<IMDBMovies/>}/>
      <Route path='/topimdb/:id' element={<IMDBMovieid/>}/>
      <Route path="*" element={ <Error/> } />
    </Routes>
    
    </>
  );
};

export default App;