import React from 'react';
import propTypes from 'prop-types';

//컴포넌트가 state가 필요하지 않은 경우 : function의 형태로 할 수 있음.
function Movie({id,year,title,summary,poster}){
return <h5>{title}</h5>;
}

Movie.propTypes ={
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
};

export default Movie;