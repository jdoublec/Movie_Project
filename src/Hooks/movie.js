import {useContext} from 'react';

import MovieContext from '../Contexts/movie_provider';

const useMovie = () => useContext(MovieContext);

export default useMovie;
