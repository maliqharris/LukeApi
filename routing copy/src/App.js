import logo from './logo.svg';
import './App.css';
import HeaderForm from './components/HeaderForm';
import CharacterPage from './views/CharacterPage';
import ShowPage from './views/ShowPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Luke API Walker</h1>
      
      <HeaderForm />


      <Routes>
        <Route path= "/shows/:id" element ={<ShowPage />} />
        <Route path= "/people/:id" element ={<CharacterPage />} />




      </Routes>


    </div>
  );
}

export default App;
