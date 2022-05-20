import './App.scss';
import { Navbar } from './components';
import RoutesContainer from './routes/RoutesContainer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ToastContainer />
      <RoutesContainer />
    </div>
  );
}

export default App;
