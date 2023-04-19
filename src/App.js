import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/home'
import Simulations from './pages/simulations'
import Navbar from './templates/headers/navbar';

import Physics from './pages/Physics';
import Chemistry from './pages/Chemistry';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          
          <Route path='/simulations' element={<Simulations />} />
          <Route path='/simulations/physics' element={<Physics />} />
          <Route path='/simulations/chemistry' element={<Chemistry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
