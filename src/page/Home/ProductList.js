import Sildebar from "../../component/navbar";
import classes from "./ProductsList.module.css";
import { useContext } from "react";
import { TableContext } from "../../store/Table-context";



export default function ProductList() {
  let { tableItems } = useContext(TableContext);
  
  return (
    <div>
      <div className={classes.sildebar}>
        <Sildebar />
      </div>
      <div className={classes.tableItems}>
        <div className={classes.productTable}>{tableItems}</div>
      </div>
    </div>
  );
}
