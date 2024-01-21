import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Toast from '../Toast';
import { getMovieDetails } from '../../services/movieService';
import './MovieDetails.scss';

const MovieDetails: React.FC = () => {
  const { movieId } = useParams() as { movieId: string };
  const [movieDetails, setMovieDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError('Error fetching movie details. Please try again.');
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-more-details">
      {error && <Toast message={error} onClose={() => setError(null)} />}
      <h2>{movieDetails.title}</h2>
      <div className="details-container">
        <div className="detail">
          <strong>Title:</strong> {movieDetails.title}
        </div>
        <div className="detail">
          <strong>Release Date:</strong> {movieDetails.release_date}
        </div>
        <div className="detail">
          <strong>Overview:</strong> {movieDetails.overview}
        </div>
        <div className="detail">
          <strong>Vote Average:</strong> {movieDetails.vote_average}
        </div>
        <div className="detail poster">
          <strong>Poster:</strong>
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt="Movie Poster" />
        </div>
        <div className="detail">
          <strong>Production Companies:</strong>{' '}
          {Array.isArray(movieDetails.production_companies)
            ? movieDetails.production_companies.map((item: any) => item.name).join(', ')
            : movieDetails.production_companies}
        </div>
        <div className="detail">
          <strong>Production Countries:</strong>{' '}
          {Array.isArray(movieDetails.production_countries)
            ? movieDetails.production_countries.map((item: any) => item.name).join(', ')
            : movieDetails.production_countries}
        </div>
        <div className="detail">
          <strong>Revenue:</strong> {movieDetails.revenue}
        </div>
        <div className="detail">
          <strong>Status:</strong> {movieDetails.status}
        </div>
        <div className="detail">
          <strong>Tagline:</strong> {movieDetails.tagline}
        </div>
        <div className="detail">
          <strong>Vote Count:</strong> {movieDetails.vote_count}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
