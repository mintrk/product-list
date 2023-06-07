import "./About.css";
import { scroller } from "react-scroll";

const About = () => {
  const scrollToSection = (sectionName: string) => {
    scroller.scrollTo(sectionName, {
      duration: 50,
      delay: 0,
      smooth: "true",
    });
  };
  return (
    <div className="container-fluid" id="about">
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
              <a
                className="btn btn-primary btn-large"
                onClick={() => scrollToSection("product")}
              >
                See all Products
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
