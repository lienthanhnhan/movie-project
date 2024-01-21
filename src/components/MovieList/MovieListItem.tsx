import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SkeletonLoader from '../SkeletonLoader';
import { getPosterPath } from '../../services/movieService';
import './MovieListItem.scss'

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const { id, title, release_date, poster_path, overview, vote_average } = movie;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="movie-item">
      <Link to={`/movies/${id}`} className="movie-poster">
        <img
          src={getPosterPath(poster_path)}
          alt={title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </Link>
      {!imageLoaded && <SkeletonLoader/>}
      <div className="movie-details">
          <Link to={`/movies/${id}`}>
            <h3 className="movie-title">{title}</h3>
          </Link>
          <p className="release-date">Release Date: {release_date}</p>
          <p className="overview">{overview}</p>
          <div className="rating">
            <span className="rating-label">Rating:</span> {vote_average}
          </div>
      </div>
    </div>
  );
};

export default MovieListItem;
