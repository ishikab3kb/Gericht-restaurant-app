import './App.css';
import { Navbar } from './components';
import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels, Gallery, FindUs, Footer } from './container';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <AboutUs></AboutUs>
      <SpecialMenu></SpecialMenu>
      <Chef></Chef>
      <Intro></Intro>
      <Laurels></Laurels>
      <Gallery></Gallery>
      <FindUs></FindUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
