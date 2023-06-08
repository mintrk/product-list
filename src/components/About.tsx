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
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      id="about"
      style={{
        height: "500px",
        backgroundImage:
          "url(https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        padding: "0",
        margin: "0",
      }}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron about">
            <h1
              className="display-1 fw-bold"
              style={{ textShadow: "0px 0px 3px #5E5E5E" }}
            >
              SHUPSHOP
            </h1>
            <p className="fs-6">
              "Whoever said money can't buy happiness simply didn't know where
              to go shopping."
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
