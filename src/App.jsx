import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./componentes/Header/Header"
import ItemsListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'
import './componentes/Header/Header.scss'
import './componentes/ItemListContainer/ItemListContainer.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarouselDark } from './componentes/Carousel/CarouselDark';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Catalogo from "./componentes/Catalogo/Catalogo";
import { Nosotros } from './componentes/Nosotros/Nosotros';
import { NuestrosTalles } from './componentes/NuestrosTalles/NuestrosTalles';
import { Contacto } from './componentes/Contacto/Contacto';
import Checkout from './componentes/Checkout/Checkout';
import { CartProvider } from './context/CartContext';
import CartView from './componentes/CartView/CartView';
import { Menu } from './componentes/Header/Menu/Menu';


function App() {

  return (
    <CartProvider>
      <BrowserRouter> 
        <Header />
        <Menu />

        <Routes>
          <Route path='/' element={
            <div>
              <CarouselDark />
              <ItemsListContainer />
            </div>
          } />

          <Route path='/producto/:itemId' element={<ItemDetailContainer />} />
          <Route path='/compra' element={<CartView/>} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/talles' element={<NuestrosTalles />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/catalogo/:categoryId' element={<Catalogo />} />
          <Route path='/checkout' element={<Checkout />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
