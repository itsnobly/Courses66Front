import './WorkCard.css'
export default function WorkCard() {
  return (
    <section className="it__work container">
      <div className="it__work__ttile">
        <h2> How It Work</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
          hendrerit euismod fusce sit.
        </p>
      </div>
      <div className="it__work-cards">
        <div className="it__work-card">
          <img src="/image/svg/work-1.svg" alt="Learn" />
          <h4>Learn More Online</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="it__work-card">
          <img src="/image/svg/work-2.svg" alt="Writing" />
          <h4>Writing Notes</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="it__work-card">
          <img src="/image/svg/work-3.svg" alt="Interactive" />
          <h4>Interactive Sessions</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="it__work-card">
          <img src="/image/svg/work-4.svg" alt="LifeTime" />
          <h4>Life Time Support</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
}
