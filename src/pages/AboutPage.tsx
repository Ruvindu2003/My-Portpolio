import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
