import React, { useState, useEffect } from 'react';

const Project = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies when the home page loads
  useEffect(() => {
    fetchDefaultMovies();
    // console.log("renter") // Fetch default movie list
  }, []);

  const fetchDefaultMovies = async () => {
    // Example: fetching trending/popular movies, or simply pre-fill with a default search
    const url = `https://www.omdbapi.com/?s=Batman&apikey=ea336f97`; // Default query for popular movies

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search.slice(0, 10)); // Show only the first 10 movies
      } else {
        setMovies([]); // Clear movies if no results
      }
    } catch (err) {
      console.error('Error fetching default movies:', err);
    }
  };

  const fetchMovies = async () => {
    if (!search) return; // Exit if no search term

    const url = `https://www.omdbapi.com/?s=${search}&apikey=ea336f97`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setSearch(""); // Clear search input after the search
      } else {
        setMovies([]); // Clear movies if no results
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const fetchMovieDetails = async (movieId) => {
    const url = `https://www.omdbapi.com/?i=${movieId}&apikey=ea336f97`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setSelectedMovie(data); // Save the selected movie details
    } catch (err) {
      console.error('Error fetching movie details:', err);
    }
  };

  const handlePosterClick = (movie) => {
    fetchMovieDetails(movie.imdbID); // Fetch detailed info for the clicked movie
  };

  return (
    <div>
      <div className='bg'>
        <input
          className='input'
          placeholder='Enter a movie'
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button className='search' onClick={fetchMovies}>Search</button>
      </div>

      {/* Carousel-like display for the selected movie */}
      {selectedMovie && (
        <div className="carousel">
          <img
            className="carousel-poster"
            src={selectedMovie.Poster}
            alt={selectedMovie.Title}
          />
          <div className="carousel-info">
            <h2 className="carousel-h">{selectedMovie.Title}</h2>
            <p className="carousel-p">Year: {selectedMovie.Year}</p>
            <p className="carousel-p">Rating: {selectedMovie.imdbRating}</p>
            <p className="carousel-p">{selectedMovie.Plot}</p>
          </div>
        </div>
      )}

      {/* Display Movie Results */}
      <div className="movie-results">
        {movies.length > 0 ? (
          <ul className='movie-ul'>
            {movies.map((movie, index) => (
              <li key={index}>
                <img
                  className='movie-img'
                  src={movie.Poster}
                  alt={movie.Title}
                  onClick={() => handlePosterClick(movie)} // Handle poster click
                />
                <p className='movie-p'>{movie.Title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <>          <p className='err' >No movies found. Please try again.</p>
                 

</>
          
        )}
      </div>
    </div>
  );
};

export default Project ;
