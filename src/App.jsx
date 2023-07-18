import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./componentes/Header/Header"
import './app.css'
import ItemsListContainer from "./componentes/ItemListContainer/ItemListContainer"
import './componentes/Header/Header.scss'
import './componentes/ItemListContainer/ItemListContainer.scss'
import { BrowserRouter } from "react-router-dom";
import { CarouselDark } from './componentes/Carousel/CarouselDark';
import Footer from './componentes/Footer/Footer';

function App() {

  return (
    <BrowserRouter>

      <Header />
      <CarouselDark/>
      <ItemsListContainer />
      <Footer/>
      
    </BrowserRouter>
  )
}

export default App
