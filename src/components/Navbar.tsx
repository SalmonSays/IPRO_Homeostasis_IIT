import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Pages from "../pages.ts";
import { useState, useEffect } from "react";
import { scrollToTop } from "../utils/scrollUtils";

export function Navbar() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation when component mounts
    setAnimate(true);

    // Reset animation every 5 seconds
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 50);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    scrollToTop();
  };

  const pages = Pages.map((item, pageIndex) => {
    if ("folder" in item && item.folder) {
      const folderItems = item.folder.map((subpage, subpageIndex) => {
        if (subpage.path) {
          return (
              <NavDropdown.Item
                  key={`subpage-${pageIndex}-${subpageIndex}`}
                  as={Link}
                  to={subpage.path}
                  className="dropdown-item"
                  >
                  {subpage.name}
              </NavDropdown.Item>
          );
        }
      });
      return (
        <NavDropdown
          key={`page-${pageIndex}`}
          title={item.name}
          id="basic-nav-dropdown"
        >
          {folderItems}
        </NavDropdown>
      );
    } else if ("path" in item && item.path) {
      const isHome = item.path === "/";
      return (
        <Nav.Link 
          key={`page-${pageIndex}`} 
          as={Link} 
          to={item.path}
          onClick={isHome ? handleHomeClick : undefined}
        >
          {item.name}
        </Nav.Link>
      );
    }
  });

  return (
    <BootstrapNavbar expand="lg" className="nav-full" fixed="top">
      <Container className="">
        <BootstrapNavbar.Brand 
          as={Link} 
          to="/" 
          className="d-flex "
          onClick={handleHomeClick}
        >
          <img
            src="/images/homeostasis-logo.png"
            height="100"
            alt="Homeostasis Logo"
            className={`${animate ? 'balloon-animation' : ''}`}
            style={{ transition: 'height 0.3s ease' }}
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" >
        <Nav className="ms-auto">{pages}</Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
