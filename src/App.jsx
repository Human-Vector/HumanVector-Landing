import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Quote from './components/Quote/Quote';
import AlignVectors from './components/AlignVectors/AlignVectors';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Quote />
      <AlignVectors />
    </div>
  );
}

export default App;
