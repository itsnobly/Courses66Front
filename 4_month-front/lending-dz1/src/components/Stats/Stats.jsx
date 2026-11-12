import './Stats.css';
export default function Stats() {
  return (
    <section className="section__info container">
      <div className="card">
        <img src="/public/image/svg/1.svg" alt="svg1" />
        <div>
          <h2>1400+</h2>
          <p>Online Courses</p>
        </div>
      </div>
      <div className="card">
        <img src="/public/image/svg/2.svg" alt="svg2" />
        <div>
          <h2>1100+</h2>
          <p>Expert Instructors</p>
        </div>
      </div>
      <div className="card">
        <img src="/public/image/svg/3.svg" alt="svg3" />
        <div>
          <h2>800+</h2>
          <p>Success Stories</p>
        </div>
      </div>
    </section>
  );
}
