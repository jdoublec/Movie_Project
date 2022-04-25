import {useContext} from 'react';
import MoviesContext from '../Contexts/movie_provider';

const useMovies = () => useContext(MoviesContext);

export default useMovies;
