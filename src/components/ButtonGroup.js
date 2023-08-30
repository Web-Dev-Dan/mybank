export default function ButtonGroup() {
  return (
    <div className="main__button-group">
      {/* Single */}
      <div className="box box--day">
        <div className="box__icon">
          <i className="fa-solid fa-sun fa-xl"></i>
        </div>
        <div className="box__wage">
          <p>£150.50</p>
        </div>
        <div className="box__button">
          <Button>
            <p>Add</p>
          </Button>
        </div>
      </div>

      {/* Single */}
      <div className="box box--night">
        <div className="box__icon">
          <i className="fa-solid fa-moon fa-xl"></i>
        </div>
        <div className="box__wage">
          <p>£150.50</p>
        </div>
        <div className="box__button">
          <Button>
            <p>Add</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
}
