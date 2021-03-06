import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import axios from 'axios';
import Layout from './components/ui/Layout';
import Navbar from './components/ui/Navbar';

import Authentication from './pages/Authentication';
import Content from './components/ui/Content';

import WorkingLayout from './components/workingLayout/WorkingLayout';

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          <Route path='/authentication' element={<Authentication />} />
        </Routes>
        <Content>
          <WorkingLayout />
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
