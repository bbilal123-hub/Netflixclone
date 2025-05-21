import React, { useEffect, useState } from 'react';
import api from 'axios';
import '../Row/Row.css';
import requests from '../../utils/request';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(''); // 👈 For YouTube trailer

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get(`https://api.themoviedb.org/3${fetchUrl}`);
        setMovies(response.data.results || []);
      } catch (err) {
        setError('Error fetching movies: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(''); // Close if already open
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v')); // Extract YouTube video ID
        })
        .catch((err) => console.error('Trailer not found:', err));
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="row" style={{ padding: '20px' }}>
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          const imagePath = isLarge ? movie.poster_path : movie.backdrop_path;
          if (!imagePath) return null;

          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)} // 👈 Trigger trailer on click
              className={`row__poster ${isLarge ? 'row__posterLarge' : ''}`}
              src={`https://image.tmdb.org/t/p/w${isLarge ? '500' : '300'}${imagePath}`}
              alt={movie.title || movie.name || movie.original_name}
              loading="lazy"
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
