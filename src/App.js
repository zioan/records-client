import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './components/ui/Layout';
import Navbar from './components/ui/Navbar';

import Authentication from './pages/Authentication';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          <Route path='/authentication' element={<Authentication />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
