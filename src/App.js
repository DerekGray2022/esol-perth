//  REACT ROUTER    //////////
import { Routes, Route } from 'react-router-dom';

//  COMPONENTS    //////////
import Header from './components/header';
import Footer from './components/footer';
//    PAGES   //////////////
import Home from './pages/home';
import About from './pages/about';
import Timetable from './pages/timetable';
import Activities from './pages/activities';
import Contact from './pages/contact';
import Beginners from './pages/beginners';
import Intermediate from './pages/intermediate';
import Advanced from './pages/advanced';
import Ielts from './pages/ielts';


// BOOTSTRAP CSS & JS   //////
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//  INHOUSE CSS   ///////////
import './scss/App.scss';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div className="App">
      <Header />

      {/* Router */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/timetable' element={<Timetable />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/beginners' element={<Beginners />} />
          <Route path='/intermediate' element={<Intermediate />} />
          <Route path='/advanced' element={<Advanced />} />
          <Route path='/ielts' element={<Ielts />} />
        </Routes>
        {/* End Router */}

      <Container fluid>
        <Footer />
      </Container>

    </div>
  );
};

export default App;



