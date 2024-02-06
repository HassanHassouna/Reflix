import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header'
import Landing from "./components/Landing/Landing";
import Catalog from "./components/Catalog/Catalog";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
    return (
        <div className="App">
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route path='/catalog' element={<Catalog/>}/>
                    <Route path='/catalog/:id' element={<MovieDetail/>}/>
                </Routes>
            </Router>
        </div>

    );
}

export default App;
