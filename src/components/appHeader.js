import "./appHeader.css";
function topHeader() {
  return (
    <nav className="navbar">
      <div className="logo">
        Dream<span>Hosting</span>
      </div>
      <ul className="list">
        <li className="list-item">
          <a href="#" className="list-link">
            Subscription
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="list-link">
            About Us
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="list-link">
            Domain Service
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default topHeader;
