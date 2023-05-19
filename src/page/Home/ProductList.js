import Sildebar from "../../component/navbar";
import classes from "./ProductsList.module.css";
import { useContext } from "react";
import { TableContext } from "../../store/Table-context";



export default function ProductList() {
  let { tableItems } = useContext(TableContext);
  
  return (
    <div className={classes.home_body}>
      <div className={classes.sildebar}>
        <Sildebar />
      </div>
      <div className={classes.productTable}>
        <div className={classes.tableItems}>{tableItems}</div>
      </div>
    </div>
  );
}
