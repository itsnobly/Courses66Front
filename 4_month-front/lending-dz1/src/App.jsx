import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Stats from './components/Stats/Stats';
import VideoContainer from './components/VideoContainer/VideoContainer';
import WorkCard from './components/WorkCard/WorkCard';
import CoursesCard from './components/CoursesCard/CoursesCard';
import CardEvent from './components/CardEvent/CardEvent';
import Footer from './components/Footer/Footer';
import './App.css';
export default function App() {
  return (
    <div className="wrapper">
      <div className="bg__image">
        {/* шапка старнцы */}
        <Header />
        {/* информация что в баннере  */}
        <main className="main">
          <h2>Self-Paced Learning Courses Online</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
            vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida
            massa. Ultrices bibendum sagittis pellentesque vitae sit.
          </p>
          <Button> Start a courses</Button>
        </main>
      </div>
      <Stats />
      <VideoContainer />
      <WorkCard />
      <CoursesCard />
      <CardEvent />
      <Footer />
    </div>
  );
}
