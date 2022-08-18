import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import Sidebar from './Components/Sidebar/sidebar';
import MainContent from './Components/MainContent/maincontent';
import Rightbar from './Components/Rightbar/rightbar';
import Home from './Home';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <>
            <BrowserRouter>
                <Route exact path="/" component={Home}/>
    </BrowserRouter>
    {/* <Header/>
    <div class="d-flex">
    <Sidebar/>
    <MainContent/>
    <Rightbar/>
    </div> */}
    </>
  );
}

export default App;
