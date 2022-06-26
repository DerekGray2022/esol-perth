//  COMPONENTS    //////////
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';


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
      <Home />
      {/* End Router */}

      <Footer />
    </div>
  );
};

export default App;



