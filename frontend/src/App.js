import Footer from './Footer';
import Greeting from './Greeting/Greeting';
import NavBar from './NavBar/NavBar';
import Services from './Services/Services';
import Cards from './Cards/Cards';
import About from './About/About';
import People from './People/People'


function App() {
  return (
    <div className="">
      <NavBar />
      <Greeting />
      <Services />
      <Cards /> 
      <People /> 
      <About />
      <Footer />
      
    </div>
  );
}

export default App;
