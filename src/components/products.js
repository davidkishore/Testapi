import { Container, Col, Row } from "react-bootstrap";
import Items from "./items";
import Cart from "./cart";

export default function Products() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Items />
          </Col>
          <Col>
            <Cart />
          </Col>
        </Row>
      </Container>
    </>
  );
}
