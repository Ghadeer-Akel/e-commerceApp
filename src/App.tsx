import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom';
import AllProduct from './components/AllProduct';
import Details from './components/Details';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductCatageory from './components/ProductCatageory';
import Slider from './components/Slider';
import About from './pages/About';
import Home from './pages/Home';
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='products/:id' element={<Details/>}></Route>
        <Route path='products/category/:cat' element={<ProductCatageory/>}></Route>
      </Routes>
      <Footer/>
    </>
);
}

export default App
