import { scroller } from "react-scroll";

function Nav() {
  const scrollToSection = (sectionName: string) => {
    scroller.scrollTo(sectionName, {
      duration: 50,
      delay: 0,
      smooth: "true",
    });
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => scrollToSection("nav")}>
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              className="nav-link active"
              aria-current="page"
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
            <a className="nav-link" onClick={() => scrollToSection("product")}>
              Product
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
