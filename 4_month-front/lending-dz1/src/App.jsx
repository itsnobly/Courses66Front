import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Stats from './components/Stats/Stats';
import WorkCard from './components/WorkCard';
import CoursesCard from './components/CoursesCard';
import CardEvent from './components/CardEvent';
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
      {/* блок с статистикой после баннера  */}
      <Stats />
      {/* следующий блок  */}
      <section className="block__info__video container">
        <div className="block__text">
          <div className="block__text-inf">
            <h2>Find Your Course That Makes Bright Future</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
              at diam magnis faucibus et faucibus gravida. malesuada fauci bus
              iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor,
              vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam
              nisi
            </p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              et hendrerit euismod fusce sit.
            </span>
          </div>
          <Button>Learn More</Button>
        </div>
        <div className="img-block">
          <a className="play" href="#">
            <img src="/image/img/5.png" alt="play" />
          </a>
        </div>
      </section>
      <section className="it__work container">
        <div className="it__work__ttile">
          <h2> How It Work</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
            hendrerit euismod fusce sit.
          </p>
        </div>
        <div className="it__work-cards">
          <WorkCard>
            <img src="/image/svg/work-1.svg" alt="Learn" />
            <h4>Learn More Online</h4>
            <p>
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam
              et hendrer it eui smod fusce sit.
            </p>
          </WorkCard>
          <WorkCard>
            <img src="/image/svg/work-2.svg" alt="Writing" />
            <h4>Writing Notes</h4>
            <p>
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam
              et hendrer it eui smod fusce sit.
            </p>
          </WorkCard>
          <WorkCard>
            <img src="/image/svg/work-3.svg" alt="Interactive" />
            <h4>Interactive Sessions</h4>
            <p>
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam
              et hendrer it eui smod fusce sit.
            </p>
          </WorkCard>
          <WorkCard>
            <img src="/image/svg/work-4.svg" alt="LifeTime" />
            <h4>Life Time Support</h4>
            <p>
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam
              et hendrer it eui smod fusce sit.
            </p>
          </WorkCard>
        </div>
      </section>
      <section className="all__courses ">
        <h2>Our All The Online Courses</h2>
        <p className="all__courses-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
          mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>

        <div className="all__course-cards container">
          <CoursesCard>
            <div className="all__course-image">
              <img src="/image/img/online-1.webp" alt="Development" />
            </div>
            <div className="all__course-title">
              <h3>Development</h3>
              <span>$150</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat
              mauris non dictumst in leo. Lorem ipsum dolor sit.
            </p>
          </CoursesCard>

          <CoursesCard>
            <div className="all__course-image">
              <img src="/image/img/online_courses2.webp" alt="Development" />
            </div>
            <div className="all__course-title">
              <h3>Android Developer</h3>
              <span>$150</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat
              mauris non dictumst in leo. Lorem ipsum dolor sit.
            </p>
          </CoursesCard>

          <CoursesCard>
            <div className="all__course-image">
              <img src="/image/img/online_courses3.webp" alt="Development" />
            </div>
            <div className="all__course-title">
              <h3>Java Script Course</h3>
              <span>$150</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat
              mauris non dictumst in leo. Lorem ipsum dolor sit.
            </p>
          </CoursesCard>

          <CoursesCard>
            <div className="all__course-image">
              <img src="/image/img/online_courses4.webp" alt="Development" />
            </div>
            <div className="all__course-title">
              <h3>Android Developer</h3>
              <span>$150</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat
              mauris non dictumst in leo. Lorem ipsum dolor sit.
            </p>
          </CoursesCard>

          <CoursesCard>
            <div className="all__course-image">
              <img src="/image/img/online_courses5.webp" alt="Development" />
            </div>
            <div className="all__course-title">
              <h3>Java Script Course</h3>
              <span>$150</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat
              mauris non dictumst in leo. Lorem ipsum dolor sit.
            </p>
          </CoursesCard>

          <CoursesCard>
            <div className="all__course-image">
              <img src="/image/img/online_courses6.webp" alt="Development" />
            </div>
            <div className="all__course-title">
              <h3>Basic Marketing</h3>
              <span>$150</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consecte adipiscing elit. Placerat
              mauris non dictumst in leo. Lorem ipsum dolor sit.
            </p>
          </CoursesCard>
        </div>
      </section>
      <section className="events">
        <h2>Upcoming Event</h2>

        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
          vestibulum euismod nullam elementum.
        </p>

        <div className="container">
          <div className="events__inner">
            <CardEvent>
              <div className="events__card-date">
                <span>10 apr</span>
              </div>

              <div className="events__card-image"></div>

              <div className="events__card-content">
                <h3>TED Talks at UCF College of Education</h3>
                <div className="events__card-info">
                  <span>4:00 pm - 8:00 pm</span>
                  <p>Dhaka Bangladesh</p>
                </div>
              </div>
            </CardEvent>

            <CardEvent>
              <div className="events__card-date">
                <span>10 apr</span>
              </div>

              <div className="events__card-image"></div>

              <div className="events__card-content">
                <h3>TED Talks at UCF College of Education</h3>
                <div className="events__card-info">
                  <span>4:00 pm - 8:00 pm</span>
                  <p>Dhaka Bangladesh</p>
                </div>
              </div>
            </CardEvent>

            <CardEvent>
              <div className="events__card-date">
                <span>10 apr</span>
              </div>

              <div className="events__card-image"></div>

              <div className="events__card-content">
                <h3>TED Talks at UCF College of Education</h3>
                <div className="events__card-info">
                  <span>4:00 pm - 8:00 pm</span>
                  <p>Dhaka Bangladesh</p>
                </div>
              </div>
            </CardEvent>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
