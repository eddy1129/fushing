import Sildebar from "../../component/Sildebar";
import classes from "./ProductsList.module.css";
import { useContext } from "react";
import { TableContext } from "../../store/Table-context";



export default function ProductList() {
  let { tableItems } = useContext(TableContext);
  
  return (
    <div className={classes.container}>
      <div className={classes.sm2}>
        <Sildebar />
      </div>
      <div className={classes.sm10}>
        <div className={classes.productTable}>{tableItems}</div>
      </div>
    </div>
  );
}
