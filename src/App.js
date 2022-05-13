import './App.scss';
import { products } from './backend/db/products';
import { Navbar } from './components';
import RoutesContainer from './routes/RoutesContainer';

function App() {
  console.log(products);
  return (
    <div className='App'>
      <Navbar />
      <RoutesContainer />
    </div>
  );
}

export default App;
