import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>

        <h1 className="error-title">
          LOST YOUR WAY IN THE GYM?
        </h1>

        <p className="error-message">
          The page you are looking for has been lifted, deleted,
          or never existed in our training program.
          Let's get you back on track!
        </p>

        <Link to="/home" className="back-btn">
          Back to Training
        </Link>
      </div>
    </div>
  );
}

export default NotFound;