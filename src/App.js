//  REACT ROUTER    //////////
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//  COMPONENTS    //////////
import Header from './components/Header';
import Footer from './components/Footer';
//    PAGES   //////////////
import Home from './pages/Home';
import History from './pages/History';
import Tutors from './pages/Tutors';
import Board from './pages/Board';
import Timetable from './pages/Timetable';
import Activities from './pages/Activities';
import Beginners from './pages/Beginners';
import Intermediate from './pages/Intermediate';
import Advanced from './pages/Advanced';
import Ielts from './pages/Ielts';
import Friends from './pages/Friends';
import Contact from './pages/Contact';


// BOOTSTRAP CSS & JS   //////
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

//  INHOUSE CSS   ///////////
import './scss/App.scss';

const App = () => {
  return (
    <div className="App">
      
      <Header />

      {/* Router */}
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/history' element={<History />} />
          <Route path='/tutors' element={<Tutors />} />
          <Route path='/board' element={<Board />} />
          <Route path='/timetable' element={<Timetable />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/beginners' element={<Beginners />} />
          <Route path='/intermediate' element={<Intermediate />} />
          <Route path='/advanced' element={<Advanced />} />
          <Route path='/friends' element={<Friends />} />
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



