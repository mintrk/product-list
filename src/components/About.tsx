import "./About.css";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron about">
            <h2>Welcome, hope you enjoy shopping!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              delectus optio in nostrum ab. Mollitia velit voluptatem debitis
              est pariatur, repellat excepturi iure quis, animi enim cupiditate,
              eos placeat illo quas laborum repellendus incidunt dolor in
              voluptatum iusto! Fugiat, laboriosam!
            </p>
            <p>
              <a className="btn btn-primary btn-large" href="/Product">
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
