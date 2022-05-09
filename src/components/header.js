import { Container, Col, Row } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Container className="topnav">
        <Row>
          <Col>
            <div>
              <h2>xomato Restaurant</h2>
              <div>Order | Eat | Enjoy </div>
            </div>
          </Col>
          <Col>
            <h2 style={{ textAlign: "right" }}>Welcome to our Restaurant</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}
