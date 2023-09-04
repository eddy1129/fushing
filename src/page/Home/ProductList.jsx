import { useContext } from "react";
import { TableContext } from "../../store/Table-context";
import Row from "react-bootstrap/Row";
export default function ProductList() {
  let { tableSection } = useContext(TableContext);

  return (
    <>
      <div>
        <Row>{tableSection}</Row>
      </div>
    </>
  );
}
