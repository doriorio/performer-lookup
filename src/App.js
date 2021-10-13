import React from 'react';
import SearchInputs from './features/search-input/SearchInputs';
import './App.css';
import  PerformerList from './features/performer-list/PerformerList';
import MovieList from './features/movie-list/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="Header">
      <h1>
        <span className="material-icons md-light md-inactive">theater_comedy</span> Performer Lookup</h1>
        <div className="App">
        <SearchInputs />
        <PerformerList />
        <MovieList />
        </div>
    </div>
  );
}

export default App;
