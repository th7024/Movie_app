import React from 'react';
import PropTypes from 'prop-types';

//컴포넌트가 state가 필요하지 않은 경우 : function의 형태로 할 수 있음.
function Movie({ year, title, summary, poster }) {
    return (
      <div class="movie">
        <img src={poster} alt={title} title={title} />
        <div class="movie__data">
          <h3 class="movie__title">{title}</h3>
          <h5 class="movie__year">{year}</h5>
          <p class="movie__summary">{summary}</p>
        </div>
      </div>
    );
}

Movie.propTypes ={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };

export default Movie;