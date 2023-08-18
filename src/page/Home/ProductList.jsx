import { useContext } from "react";
import { TableContext } from "../../store/Table-context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Sildebar from "../../component/navbar"


export default function ProductList() {
  let { tableSection } = useContext(TableContext);

  return (
    <>
      <Container>
        <Sildebar />
        <Row xs={1} md={3} className="g-5">
          {tableSection}
        </Row>
      </Container>
    </>
  );
}
