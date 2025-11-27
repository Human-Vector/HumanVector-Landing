import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Quote from './components/Quote/Quote';
import AlignVectors from './components/AlignVectors/AlignVectors';
import TwoQuotes from './components/TwoQuotes/TwoQuotes';
import ProblemBlock from './components/ProblemBlock/ProblemBlock';
import ProvenSolution from './components/ProvenSolution/ProvenSolution';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Quote />
      <AlignVectors />
      <TwoQuotes />
      <ProblemBlock />
      <ProvenSolution />
    </div>
  );
}

export default App;
