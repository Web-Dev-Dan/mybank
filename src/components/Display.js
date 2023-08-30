import { useState } from "react";
import Breakdown from "./Breakdown";

export default function Display() {
  const [breakdownIsShown, setBreakdownIsShown] = useState(false);

  return (
    <div className="main__display">
      {/* Sum */}
      <div className="main__sum">
        <p>After tax, your total pay is:</p>
        <p className="main__sum__final">£150.50</p>
      </div>
      {/* Button */}
      <button
        onClick={() => setBreakdownIsShown((prev) => !prev)}
        className={`main__button ${
          breakdownIsShown ? "main__button--active" : ""
        }`}
      >
        <i className="fa-solid fa-circle-chevron-right"></i>
        <p>See {breakdownIsShown ? "Less" : "More"}</p>
      </button>
      {/* Breakdown */}
      <Breakdown breakdownIsShown={breakdownIsShown} />
    </div>
  );
}
