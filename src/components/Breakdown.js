export default function Breakdown({ breakdownIsShown }) {
  return (
    <div
      className={`main__breakdown ${
        breakdownIsShown ? "main__breakdown--active" : ""
      }`}
    >
      {/* Row */}
      <div className="main__breakdown__row">
        <div className="main__breakdown__icon">
          <i className="fa-solid fa-sun"></i>
        </div>
        <div className="main__breakdown__content">
          <p>Day Shifts</p>
        </div>
        <div className="main__breakdown__stat">
          <p>10</p>
        </div>
        <div className="main__breakdown__figure">
          <p>£555.55</p>
        </div>
      </div>
      {/* Row */}
      <div className="main__breakdown__row">
        <div className="main__breakdown__icon">
          <i className="fa-solid fa-moon"></i>
        </div>
        <div className="main__breakdown__content">
          <p>Night Shifts</p>
        </div>
        <div className="main__breakdown__stat">
          <p>10</p>
        </div>
        <div className="main__breakdown__figure">
          <p>£555.55</p>
        </div>
      </div>
      {/* Row */}
      <div className="main__breakdown__row bc--gray">
        <div className="main__breakdown__icon">
          <i className="fa-solid fa-comments-dollar"></i>
        </div>
        <div className="main__breakdown__content">
          <p>Overtime Sum</p>
        </div>
        <div className="main__breakdown__stat">
          <p>10</p>
        </div>
        <div className="main__breakdown__figure">
          <p>£555.55</p>
        </div>
      </div>
      {/* Row */}
      <div className="main__breakdown__row bc--red">
        <div className="main__breakdown__icon">
          <i className="fa-solid fa-chart-pie"></i>
        </div>
        <div className="main__breakdown__content">
          <p>Income Tax / National Insurance</p>
        </div>
        <div className="main__breakdown__stat">
          <p>10</p>
        </div>
        <div className="main__breakdown__figure">
          <p>-£555.55</p>
        </div>
      </div>
      {/* Row */}
      <div className="main__breakdown__row bc--green">
        <div className="main__breakdown__icon">
          <i className="fa-solid fa-sack-dollar"></i>
        </div>
        <div className="main__breakdown__content">
          <p>Total Pay</p>
        </div>
        <div className="main__breakdown__stat">
          <p>10</p>
        </div>
        <div className="main__breakdown__figure">
          <p>£555.55</p>
        </div>
      </div>
    </div>
  );
}
