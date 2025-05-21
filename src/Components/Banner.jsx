import React, { useEffect, useState } from 'react';
import api from './utils/axios'; // ✅ Correct import

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovie = async () => {
      try {
        const response = await api.get('/discover/movie');
        const results = response.data.results;
        const randomMovie = results[Math.floor(Math.random() * results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error('Error fetching banner movie:', error);
      }
    };

    fetchPopularMovie();
  }, []);

  if (!movie) return <div>Loading...</div>;

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '100px 20px',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <h1>{movie.title}</h1>
      <p style={{ maxWidth: '600px' }}>{movie.overview}</p>
      <strong>⭐ {movie.vote_average}</strong>
    </div>
  );
};

export default Banner;
