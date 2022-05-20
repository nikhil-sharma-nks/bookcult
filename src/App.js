import './App.scss';
import { Navbar } from './components';
import RoutesContainer from './routes/RoutesContainer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ToastContainer style={{ top: '5rem' }} />
      <RoutesContainer />
    </div>
  );
}

export default App;
