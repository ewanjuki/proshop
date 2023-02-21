import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-2">Copyright &copy; ProShop</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
