import {Routes as AllRoutes, Route} from 'react-router-dom';

import AllMovies from '../App/All_Movies/all_movies';
import Favorites from '../App/Favorites/favorites';

function Routes() {
  return (
    <AllRoutes>
      <Route path="*" element={<AllMovies />} />
      <Route path="/favs" element={<Favorites />} />
    </AllRoutes>
  )
}

export default Routes;