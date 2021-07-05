import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
import Header from '../src/components/Header/Header'
import Portfolio from '../src/components/Portfolio/Portfolio'
import Services from './components/Services/Services';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Portfolio></Portfolio>
      <Services></Services>
    </div>
  );
}

export default App;
