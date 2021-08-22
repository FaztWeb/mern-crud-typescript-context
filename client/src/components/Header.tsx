import { Link } from "react-router-dom";

const Header = () => (
  <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light">
          Welcome to <strong className="fw-bold">TaskApp</strong>{" "}
        </h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don’t simply skip over it entirely.
        </p>
        <p>
          <Link to="/new" className="btn btn-primary my-2">
            Create a Task
          </Link>
        </p>
      </div>
    </div>
  </section>
);

export default Header;
