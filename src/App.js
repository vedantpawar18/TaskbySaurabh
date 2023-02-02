import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Explore from './Components/Explore';
import Problem from './Components/Problem';
import LearnMore from './Components/LearnMore';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Explore />
     <Problem />
     <LearnMore />
    </div>
  );
}

export default App;
