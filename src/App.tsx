import './App.css'
import { Footer } from './components/Footer/footer';
import { Card } from './components/Card/card';
import Json from './../db.json';


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
  <>
   
   <div className='d-flex flex-wrap justify-content-center align-item-center'>
          {cards}
      </div>
   
    <Footer />
  </>
)
}


export default App
