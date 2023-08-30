export default function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="nav">navigation</nav>

        <main className="main">
          <div className="main__container main__buttons">
            {/* Box */}
            <form className="box box--day">
              <div className="box__icon">
                <i className="fa-solid fa-sun fa-xl"></i>
              </div>
              <div className="box__wage">
                <p>£150.50</p>
              </div>
              <div className="box__button">
                <button className="btn">Add Shift</button>
              </div>
            </form>

            {/* Box */}
            <form className="box box--night">
              <div className="box__icon">
                <i className="fa-solid fa-moon fa-xl"></i>
              </div>
              <div className="box__wage">
                <p>£150.50</p>
              </div>
              <div className="box__button">
                <button>Add Shift</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
