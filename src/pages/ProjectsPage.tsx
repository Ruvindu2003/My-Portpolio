import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <div className="pt-20">
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default ProjectsPage;
