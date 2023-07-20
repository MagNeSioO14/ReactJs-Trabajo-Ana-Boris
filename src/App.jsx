import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./componentes/Header/Header"
import ItemsListContainer from "./componentes/ItemListContainer/ItemListContainer"
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

function App() {

  return (
    <BrowserRouter>
      <Header />
      
      <Routes> 
        <Route path='/' element={
        <div>
          <CarouselDark/>
          <ItemsListContainer />
        </div>
        }/>

        <Route path='/producto/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/talles' element={<NuestrosTalles/>}/>
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/catalogo/:categoryId' element={<Catalogo/>} />

      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
