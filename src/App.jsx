import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./componentes/Header/Header"
import './app.css'
import ItemsListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './componentes/Header/Header.scss'
import './componentes/ItemListContainer/ItemListContainer.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarouselDark } from './componentes/Carousel/CarouselDark';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

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


      </Routes>

      <Footer/>
      
    </BrowserRouter>
  )
}

export default App
