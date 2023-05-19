import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/home'
import Simulations from './pages/simulations'
import { Navbar } from './components';
import Physics from './pages/Physics';
import Chemistry from './pages/Chemistry';
import Biology from './pages/Biology';
import Experiment from './pages/Experiment';
import Maths from './pages/Maths';
import ProfilePage from './pages/Profile';
import { ThemeProvider } from '@mui/material';
import theme from './utils/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          
          <Route path='/simulations' element={<Simulations />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/simulations/physics' element={<Physics />} />
          <Route path='/simulations/chemistry' element={<Chemistry />} />
          <Route path='/simulations/Biology' element={<Biology />} />
          <Route path='/simulations/maths' element={<Maths />} />
          <Route path='/experiment' element={<Experiment />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
