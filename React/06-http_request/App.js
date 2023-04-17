import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  //async await을 사용한다면!
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseData: movieData.release_data
        }
      });
    setMovies(transformedMovies);
    } catch(error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie) {
    console.log(movie);
  }
//fetch API
/*   const fetchMoviesHandler = () => {
    setIsLoading(true);
    setError(null); // 이전의 오류가 남아있을 경우를 대비해서 null 값으로 지정
    // fetch의 기본값은 get, 프로미스를 반환함
    fetch('https://swapi.dev/api/films/')
    .then(response => {
        return response.json();
    })
    .catch(error => {
      setError('Something went wrong');
      setIsLoading(false);
    })
    .then(data => {
      const transformedMovies = data.results.map(moviesData => {
        return {
          // 데이터를 받아오는 과정에서 이름을 재지정하는 방법. 이거 아니면 데이터 속성이름(episode_id) 그대로 사용하는 방법도 있음!
          id: moviesData.episode_id,
          title: moviesData.title,
          openingText: moviesData.opening_crawl,
          releaseData: moviesData.release_data
        }
      })
      setMovies(transformedMovies);
      setIsLoading(false);
    });
  }
 */
  let content = <p>Found no movies.</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>Found no movies.</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
