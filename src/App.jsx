import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Quote from './components/Quote/Quote';
import AlignVectors from './components/AlignVectors/AlignVectors';
import TwoQuotes from './components/TwoQuotes/TwoQuotes';
import ProblemBlock from './components/ProblemBlock/ProblemBlock';
import ProvenSolution from './components/ProvenSolution/ProvenSolution';
import IntegrationSteps from './components/IntegrationSteps/IntegrationSteps';
import ChooseScale from './components/ChooseScale/ChooseScale';
import ContactForm from './components/ContactForm/ContactForm';
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
      <IntegrationSteps />
      <ChooseScale />
      <ContactForm />
    </div>
  );
}

export default App;
