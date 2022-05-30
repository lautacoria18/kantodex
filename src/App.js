/* eslint-disable jsx-a11y/alt-text */
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRouteMatch,
} from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import Home from './Home';
import Gimnasio from './Components/Gimnasio';
import Historia from './Components/Historia';
import Header from './Header';





  


function App() {

 


  return (
    
    
     
      <Router>
        <NavMenu />
        <Header />
        

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gimnasios" element={<Gimnasio/>} />
          <Route path="/historia" element={<Historia/>} />
          </ Routes >
          </Router >
          
   
  );
}

export default App;
