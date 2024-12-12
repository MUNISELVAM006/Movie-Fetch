
import React, { useState, useEffect } from 'react';

const Project = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchDefaultMovies();
  }, []);

  const fetchDefaultMovies = async () => {
    const url = `https://www.omdbapi.com/?s=batman&apikey=ea336f97`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search.slice(0, 10));
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error('Error fetching default movies:', err);
    }
  };

  const fetchMovies = async () => {
    if (!search) return;

    const url = `https://www.omdbapi.com/?s=${search}&apikey=ea336f97`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setSearch("");
      } else {
        setMovies([]);
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
      setSelectedMovie(data);
    } catch (err) {
      console.error('Error fetching movie details:', err);
    }
  };

  const handlePosterClick = (movie) => {
    fetchMovieDetails(movie.imdbID);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Search Section */}
      <div className="w-full max-w-3xl p-4 flex flex-col md:flex-row md:items-center md:justify-between bg-gray-800 text-white">
        <input
          className="w-full md:w-2/3 flex-1 p-2 rounded-md text-white bg-gray-900"
          placeholder="Enter a movie"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="mt-2  md:mt-0 md:ml-2 p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
          onClick={fetchMovies}
        >
          Search
        </button>
      </div>

      {/* Selected Movie Details */}
      {selectedMovie && (
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md mt-4 p-4 flex flex-col lg:flex-row lg:items-center">
          <img
            className="w-32 h-48 lg:w-48 lg:h-64 rounded-lg"
            src={selectedMovie.Poster}
            alt={selectedMovie.Title}
          />
          <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-center lg:items-start">
            <h2 className="text-xl font-bold">{selectedMovie.Title}</h2>
            <p className="text-sm text-gray-500">Year: {selectedMovie.Year}</p>
            <p className="text-sm text-gray-500">Rating: {selectedMovie.imdbRating}</p>
            <p className="text-sm text-gray-700 text-center lg:text-left">{selectedMovie.Plot}</p>
          </div>
        </div>
      )}

      {/* Movie Grid */}
      <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 px-4">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="w-24 h-36 lg:w-32 lg:h-48 rounded-md cursor-pointer transition-transform transform hover:scale-105"
                src={movie.Poster}
                alt={movie.Title}
                onClick={() => handlePosterClick(movie)}
              />
              <p className="text-center text-sm text-gray-700 mt-2">{movie.Title}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 col-span-full">
            No movies found. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default Project;
