
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import FetchData from './FetchData';
import Footer from './Footer';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/entertainment' element={<FetchData category="entertainment"/>}></Route>
        <Route path='/health' element={<FetchData category="health"/>}></Route>
        <Route path='/sports' element={<FetchData category="sports"/>}></Route>
        <Route path='/technology' element={<FetchData category="technology"/>}></Route>
      </Routes>

      <Footer/>


      

      
      
     </BrowserRouter>

    </div>
  );
}

export default App;
