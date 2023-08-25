import { useContext } from "react";
import { TableContext } from "../../store/Table-context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Sildebar from "../../component/navbar"


export default function ProductList() {
  let { tableSection } = useContext(TableContext);

  return (
    <>
    <div className="bgc">
      <Container >
        <Sildebar />
        <Row>
          {tableSection}
        </Row>
      </Container>
      </div>
    </>
  );
}
