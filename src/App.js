import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer /></>,
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /><Footer /></>,
    },
    {
      path: "/services",
      element: <><Navbar /><Services /><Footer /></>,
    },
    {
      path: "/about",
      element: <><Navbar /><About /><Footer /></>,
    },
  ]);

  return (
    <>
      <div className='app-bg'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;