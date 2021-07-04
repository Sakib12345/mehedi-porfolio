import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
import Header from '../src/components/Header/Header'
import Portfolio from '../src/components/Portfolio/Portfolio'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
