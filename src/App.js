import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './App/Header/header';
import { MovieProvider } from './Contexts/movie_provider';
import Routes from './Routes/routes';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </MovieProvider>
    </div>
  );
}

export default App;
