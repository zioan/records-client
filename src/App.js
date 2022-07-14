import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './components/ui/Layout';
import Navbar from './components/ui/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <button className='btn'>Button</button>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
