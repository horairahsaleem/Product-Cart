import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './styles/app.scss';
import { Toaster } from 'react-hot-toast'
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/cart' element={ <Cart/>} />
      </Routes>
      <Toaster/>
      </BrowserRouter>
    </div>
  );
}

export default App;
