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
    <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">SHUPSHOP</span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item mx-3">
          <button
            className="btn btn-dark"
            onClick={() => scrollToSection("product")}>
            Product
          </button>
        </li>
      </ul>
    </header>
  );
}
export default Nav;
