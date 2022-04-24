import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Client from '../Data/client';
import cssClass from './movie_provider.module.css';
import logo from '../logo.svg';

const MovieContext = createContext({
  getMovies: () => Promise.resolve(),
  movies: {},
  addFavorite: () => {},
  delFavorite: () => {},
  orderMoviesBy: () => {},
  favorites: [],
});

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchMovies = useCallback(async () => {
    const response = await Client.getMovies();
    const { items } = response;
    setMovies(items);
  }, [setMovies]);

  const getMovies = useCallback(async () => {
    await fetchMovies();
  }, [fetchMovies]);
  
  const orderMoviesBy = useMemo(() => {
    const notFavs = movies
      ?.filter((m) => !favorites?.some((f) => f.id === m.id))
      ?.sort((a, b) => {
        const A = a?.title?.toUpperCase();
        const B = b?.title?.toUpperCase();

        if (A > B) return 1;
        if (A < B) return -1;

        return 0;
      });

    const favs = favorites?.sort((a, b) => {
      const A = a?.title?.toUpperCase();
      const B = b?.title?.toUpperCase();

      if (A > B) return 1;
      if (A < B) return -1;

      return 0;
    });

    setSortedMovies([...favs, ...notFavs]);
  }, [movies, favorites]); // eslint-disable-line react-hooks/exhaustive-deps

  const addFavorite = useCallback(
    (id) => {
      const add = movies.find((m) => m.id === id);
      setFavorites((prev) => {
        return [...prev, add];
      });
    },
    [movies, setFavorites],
  );

  const delFavorite = useCallback(
    (id) => {
      setFavorites((prev) => prev.filter((f) => f.id !== id));
    },
    [setFavorites],
  );

  const value = useMemo(
    () => ({
      getMovies,
      movies: sortedMovies,
      addFavorite,
      delFavorite,
      orderMoviesBy,
      favorites,
    }),
    [getMovies, sortedMovies, addFavorite, delFavorite, orderMoviesBy, favorites],
  );

  useEffect(() => {
    getMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!movies.length) {
    return <img src={logo} className={cssClass.logo} alt="logo" />;
  }

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export default MovieContext;
