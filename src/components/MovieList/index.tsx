import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMatch } from 'react-router';
import MovieListItem from './MovieListItem';
import TabBar from '../TabBar';
import SearchBar from '../SearchBar';
import ViewSwitchMode, { VIEW_MODE } from '../ViewSwitchMode';
import Toast from '../Toast';
import { getNowPlayingMovies, getTopRatedMovies, searchMovies } from '../../services/movieService';
import './MovieList.scss';
import classNames from 'classnames';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<string>(VIEW_MODE.LIST);
  const [isLoading, setIsLoading] = useState(false);
  const isTopRated = useMatch('/top-rated');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = isTopRated ? await getTopRatedMovies() : await getNowPlayingMovies();
        setMovies(data.results);
      } catch (error) {
        setError('Error fetching movies. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [isTopRated]);

  const renderMovieList = () => {
    if (movies.length <= 0) {
      return <p>No movies available at the moment.</p>;
    }
    if (viewMode === VIEW_MODE.LIST) {
      return (
        <div className="list-container">
          {movies.map((movie) => (
            <MovieListItem movie={movie} key={movie.id}/>
          ))}
        </div>
      );
    }
    return (
      <div className="grid-container">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} className="grid-item">
            <MovieListItem movie={movie} key={movie.id}/>
          </Link>
        ))}
      </div>
    );
  }

  const handleSearch = async (query: string) => {
    try {
      setIsLoading(true);
      const data = await searchMovies(query);
      setMovies(data.results);
    } catch (error) {
      setError('Error fetching movies. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classNames('movie-container', {
      'loading': isLoading,
    })}>
      {error && <Toast message={error} onClose={() => setError(null)} />}
      <TabBar />
      <div className='container'>
        <div className='header-bar'>
          <h4>Movies List</h4>
          <ViewSwitchMode setViewMode={setViewMode} currentView={viewMode} />
        </div>
        <SearchBar onSearch={handleSearch} />
        {renderMovieList()}
      </div>
    </div>
  );
};

export default MovieList;
