import './App.css';
import Row from './components/Row';
import requests from './components/requests';
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      <h1 style={{color:'red'}}>Netflix</h1>


      <Banner fetchurl={requests.fetchNetflixOriginals}/>

      <Row isPresent={true} title="Trending" fetchurl={requests.fetchTrending} />
      <Row  title="NetflixOriginals" fetchurl={requests.fetchNetflixOriginals} />
      <Row title="TopRated" fetchurl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchurl={requests.fetchActionMovies} />
      <Row title="HorrorMovies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />


    </div>
  );
}

export default App;
