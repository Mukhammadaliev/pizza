
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Cart from './page/Cart';
import Home from './page/Home';

function App() {
  return (
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
        </Routes>
      </div>
  );
}

export default App;
