import './App.css'
import { Footer } from './components/Footer/footer';
import { Card } from './components/Card/card1';
import Json from './../db.json';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel';
import { PrincipalNavigator } from './navigators/PrincipalNavigator';

const cards = [];

Json.products.forEach(function (e) {
  cards.push(
    <Card
      title={e.title}
      descripción={e.descripción}
      price={e.price}
    />
  )
});

function App() {

return (
/*   <>
   <Header />
   <Carousel />
   <section className='d-flex flex-wrap justify-content-center align-item-center'>
          {cards}
    </section>
   
    <Footer />
  </> */
    <PrincipalNavigator />
)
}


export default App