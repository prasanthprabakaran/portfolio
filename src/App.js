import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from  "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import SnackbarProvider from 'react-simple-snackbar'
import Preloader from './components/Preloader';
import { useState,useEffect } from 'react';
function App() {

  const [load, updateLoad] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(()=> {
      updateLoad(false);
    },1200);
    return () => clearTimeout(timer);
  },[load]);

  return (
    <div className="App">
      <SnackbarProvider>
        <Preloader load={load} />
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/project/:id" element={<ProjectDisplay/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
