import { useContext } from "react";
import { TableContext } from "../../store/Table-context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function ProductList() {
  let { tableSection } = useContext(TableContext);

  return (
    <>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {tableSection}
        </Row>
      </Container>
    </>
  );
}
