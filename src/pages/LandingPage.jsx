import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import Quote from '../components/Quote/Quote';
import AlignVectors from '../components/AlignVectors/AlignVectors';
import TwoQuotes from '../components/TwoQuotes/TwoQuotes';
import ProvenSolution from '../components/ProvenSolution/ProvenSolution';
import IntegrationSteps from '../components/IntegrationSteps/IntegrationSteps';
import ChooseScale from '../components/ChooseScale/ChooseScale';
import ContactForm from '../components/ContactForm/ContactForm';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Quote />
      <AlignVectors />
      <TwoQuotes />
      <ProvenSolution />
      <IntegrationSteps />
      <ChooseScale />
      <ContactForm />
      <FAQ />
      <Footer />
    </>
  );
};

export default LandingPage;
