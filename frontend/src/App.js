import Footer from './Footer';
import Greeting from './Greeting/Greeting';

import NavBar from './NavBar/NavBar';
import Services from './Services/Services';
import Cards from './Cards/Cards';
import About from './About/About';


function App() {
  return (
    <div className="">
      <NavBar />
      <Greeting />
      <Services />
      <Cards /> 
      <About />
      <Footer />
      
    </div>
  );
}

export default App;
