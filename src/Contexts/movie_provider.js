import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Client from '../Data/client';

const MoviesContext = createContext({
  getMovies: () => Promise.resolve(),
  getMovieById: () => Promise.resolve(),
  sortedMovies: [],
  addFavorite: () => {},
  delFavorite: () => {},
  favorites: [],
  getFavorites: () => {},
});

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const sortMovies = useCallback(() => {
    const notFavs = movies
      ?.filter((m) => !favorites?.some((f) => f.id === m.id))
      ?.sort((a, b) => {
        const A = a?.title?.toUpperCase();
        const B = b?.title?.toUpperCase();

        if (A > B) return 1;
        if (A < B) return -1;

        return 0;
      });

    const favs = movies
      ?.filter((m) => favorites?.some((f) => f.id === m.id))
      ?.sort((a, b) => {
        const A = a?.title?.toUpperCase();
        const B = b?.title?.toUpperCase();

        if (A > B) return 1;
        if (A < B) return -1;

        return 0;
      });

    setSortedMovies([...favs, ...notFavs]);
  }, [movies, favorites]);

  const fetchMovies = useCallback(async () => {
    const response = await Client.getMovies();
    const { items } = response;
    setMovies(items);
  }, [setMovies]);

  useEffect(() => {
    sortMovies();
  }, [movies, sortMovies]);

  const fetchMovieById = useCallback(
    async (id) => {
      const response = await Client.getMovieById(id);

      setMovies((prev) => {
        return prev.map((m) => {
          if (m.id === id) {
            return { ...m, desc: response };
          }

          return m;
        });
      });

      if (favorites.some((f) => f.id === id)) {
        setFavorites((prev) => {
          return prev.map((f) => {
            if (f.id === id) {
              return { ...f, desc: response };
            }

            return f;
          });
        });
      }
    },
    [favorites, setFavorites, setMovies],
  );

  const getMovies = useCallback(async () => {
    await fetchMovies();
  }, [fetchMovies]);

  const getMovieById = useCallback(
    (id) => {
      const movie = movies.filter((m) => m.id === id);
      if (!movie.desc) {
        fetchMovieById(id);
      }
    },
    [fetchMovieById, movies],
  );

  const getFavorites = useCallback(() => {
    const current = movies.filter((m) => favorites.some((f) => f === m.id));

    return current;
  }, [movies, favorites]);

  const addFavorite = useCallback(
    (id) => {
      const next = movies.find((m) => m.id === id);
      setFavorites((prev) => {
        return [...prev, next];
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
      getMovieById,
      sortedMovies,
      addFavorite,
      delFavorite,
      favorites,
      getFavorites,
    }),
    [
      getMovies,
      getMovieById,
      sortedMovies,
      addFavorite,
      delFavorite,
      favorites,
      getFavorites,
    ],
  );

  useEffect(() => {
    async function fetchData() {
      await getMovies();
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

export default MoviesContext;
