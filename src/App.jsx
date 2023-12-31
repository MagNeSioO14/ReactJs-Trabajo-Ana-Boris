import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./componentes/Header/Header"
import ItemsListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './App.css'
import './componentes/Header/Header.scss'
import './componentes/ItemListContainer/ItemListContainer.scss'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import AgregarProducto from './componentes/AgregarProducto/AgregarProducto';
import { useAuth } from './context/AuthContext';
import { NotFound } from './componentes/NotFound/NotFound';
import VerMiCompra from './componentes/VerMiCompra/VerMiCompra';


function App() {
  const { isAdmin } = useAuth()
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
          <Route path='/cartView' element={<CartView />} />
          <Route path='/catalogo' element={<Catalogo />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/talles' element={<NuestrosTalles />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/catalogo/:categoryId' element={<Catalogo />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/agregar' element={isAdmin ? <AgregarProducto /> : <Navigate to='/' />} />

          <Route path='/verCompra' element={<VerMiCompra/>} />

          <Route path='/*' element={ <NotFound/> } />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>

  )
}

export default App
