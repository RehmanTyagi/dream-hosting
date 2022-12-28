import "./appHeader.css";
function topHeader() {
  return (
    <nav className="navbar">
      <div className="logo">
        Dream<span>Hosting</span>
      </div>
      <ul className="list">
        <li className="list-item">
          <a href="https://merchant.razorpay.com/policy/KxEikLW0irUrDj/privacy" className="list-link">
            Privacy-Policy
          </a>
        </li>
        <li className="list-item">
          <a href="https://merchant.razorpay.com/policy/KxEikLW0irUrDj/terms" className="list-link">
            Terms
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="list-link">
            Refund Policy
          </a>
        </li>
         <li className="list-item">
          <a href="https://merchant.razorpay.com/policy/KxEikLW0irUrDj/contact_us" className="list-link">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default topHeader;
