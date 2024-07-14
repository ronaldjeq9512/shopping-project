import './App.css'
import { Header } from './components/Header'

function App() {
  const emptyArray = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <>
        <Header />
        <button type="button" className="btn btn-warning">Warning</button>
        {emptyArray.map((_items, key)=> (
          <p key={key}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia earum ullam a tempore. Dignissimos modi ab officia nihil dicta quae repellat quia tenetur inventore molestiae nesciunt nemo, est, optio neque!</p>
        ))
        }
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia earum ullam a tempore. Dignissimos modi ab officia nihil dicta quae repellat quia tenetur inventore molestiae nesciunt nemo, est, optio neque!</p>

    </>
  )
}

export default App
