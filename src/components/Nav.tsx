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
    // <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
    //   <div className="container-fluid">

    //     <div className="collapse navbar-collapse">
    //       <div className="navbar-nav">
    //         <a
    //           className="nav-link active"
    //           onClick={() => scrollToSection("about")}
    //         >
    //           About
    //         </a>

    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <header className="d-flex flex-wrap justify-content-center py-3 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <svg className="bi me-2" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">SHUPSHOP</span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            className="nav-link active"
            onClick={() => scrollToSection("about")}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={() => scrollToSection("product")}>
            Product
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Nav;
