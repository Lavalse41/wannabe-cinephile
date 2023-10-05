function WatchedMoviesList({ watched }) {
  return (
    <div>
      <ul className="list">
        {watched.map((movie) => (
          <li key={movie.imdbID}>
            <img
              src={movie.poster}
              alt={`${movie.title} poster`}
              className="watched-img"
            />
            {/* <h3>{movie.Title}</h3> */}
            <div>
              <p>
                <span className="emoji">⭐️</span>
                <span>{movie.imdbRating}</span>
              </p>
              <p>
                <span className="emoji">🌟</span>
                <span>{movie.userRating}</span>
              </p>
              {/* <p>
                <span className="emoji">⏳</span>
                <span>{movie.runtime} min</span>
              </p> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WatchedMoviesList;
