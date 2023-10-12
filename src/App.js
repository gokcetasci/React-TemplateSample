import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pagecontent from "./components/Pagecontent";


function App() {
  return (<>
    <Navbar/>
    <Header/>
    <Pagecontent/>
    <About/>
    <Contact/>
    <Footer/>
  </>
  );
}

export default App;
