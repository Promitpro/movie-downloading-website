import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../src/Home";
import SingleMovie from "../src/SingleMovie";
import Error from "../src/Error";
import './App.css';
import Movie from './Movies';
import SingleLatestMovie from './SingleLatestMovie';
import SingleLatestTvSeries from './SingleLatestTvSeries';

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/searchItems" element={<Movie></Movie>}/>
      <Route path="movie/searchItems/:id" element={ <SingleMovie/> } />
      <Route path="movie/:id/" element={<SingleLatestMovie/>}/>
      <Route path='/tvseries/:id' element={<SingleLatestTvSeries/>}/>
      <Route path="*" element={ <Error/> } />
    </Routes>
    
    </>
  );
};

export default App;