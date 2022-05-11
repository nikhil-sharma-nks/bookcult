import './App.scss';
import { products } from './backend/db/products';
import { Navbar, CarouselComponent, Featured } from './components';

function App() {
  console.log(products);
  return (
    <div className='App'>
      <Navbar />
      <CarouselComponent />
      <Featured />
    </div>
  );
}

export default App;
