// reactstrap components
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              ENERGY TIME
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem>
              <NavLink href="#" target="_blank">
                SALUD
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" target="_blank">
                DEPORTE
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" target="_blank">
                ENTRENAMIENTO
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;