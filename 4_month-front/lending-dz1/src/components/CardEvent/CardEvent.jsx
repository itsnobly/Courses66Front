import './CardEvent.css';
export default function CardEvent() {
  return (
    <section className="events">
      <h2>Upcoming Event</h2>

      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
        vestibulum euismod nullam elementum.
      </p>

      <div className="container">
        <div className="events__inner">
          <div className="events__card">
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
          </div>

          <div className="events__card">
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
          </div>

          <div className="events__card">
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
          </div>
        </div>
      </div>
    </section>
  );
}
