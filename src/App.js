import './App.css';
import Header from './App/Header/header';
import Main from './App/Main/main';
import { MovieProvider } from './Contexts/movie_provider';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Header />
        <Main />
      </MovieProvider>
    </div>
  );
}

export default App;
