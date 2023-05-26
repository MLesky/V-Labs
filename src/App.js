import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { HomePage, Simulations, Chemistry, Biology, Maths, Physics, ProfilePage, Experiment, RequestPage } from './pages';
import { Navbar } from './components';
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
          <Route path='/requests' element={<RequestPage />} />
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
