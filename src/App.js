import './App.scss';
import { Navbar } from './components';
import RoutesContainer from './routes/RoutesContainer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <RoutesContainer />
    </div>
  );
}

export default App;
