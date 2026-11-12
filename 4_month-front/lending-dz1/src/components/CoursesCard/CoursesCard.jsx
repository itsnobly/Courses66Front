import './CoursesCard.css';
export default function CoursesCard() {
  return (
    <section className="all__courses">
      <h2>Our All The Online Courses</h2>
      <p className="all__courses-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris
        non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>

      <div className="all__course-cards container">
        <div className="all__course-card">
          <div className="all__course-image">
            <img src="/image/img/online-1.webp" alt="Development" />
          </div>
          <div className="all__course-title">
            <h3>Development</h3>
            <span>$150</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="all__course-card">
          <div className="all__course-image">
            <img
              src="/image/img/online_courses2.webp"
              alt="Android Developer"
            />
          </div>
          <div className="all__course-title">
            <h3>Android Developer</h3>
            <span>$150</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="all__course-card">
          <div className="all__course-image">
            <img
              src="/image/img/online_courses3.webp"
              alt="JavaScript Course"
            />
          </div>
          <div className="all__course-title">
            <h3>Java Script Course</h3>
            <span>$150</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="all__course-card">
          <div className="all__course-image">
            <img
              src="/image/img/online_courses4.webp"
              alt="Android Developer"
            />
          </div>
          <div className="all__course-title">
            <h3>Android Developer</h3>
            <span>$150</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="all__course-card">
          <div className="all__course-image">
            <img
              src="/image/img/online_courses5.webp"
              alt="JavaScript Course"
            />
          </div>
          <div className="all__course-title">
            <h3>Java Script Course</h3>
            <span>$150</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="all__course-card">
          <div className="all__course-image">
            <img src="/image/img/online_courses6.webp" alt="Basic Marketing" />
          </div>
          <div className="all__course-title">
            <h3>Basic Marketing</h3>
            <span>$150</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
}
