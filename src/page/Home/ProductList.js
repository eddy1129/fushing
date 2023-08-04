import Sildebar from "../../component/navbar";
import classes from "./ProductsList.module.css";
import { useContext } from "react";
import { TableContext } from "../../store/Table-context";
import {

  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


export default function ProductList() {
  let { tableItems } = useContext(TableContext);

  return (
    <MDBContainer style={{backgroundColor:"#e9ecef",padding:"20px",position:"relative",top:"0"}}>
      <MDBRow>
        <MDBCol md='2'>
          <Sildebar />
        </MDBCol>
        <MDBCol md='10'>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4' >
            {tableItems}
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>



  );
}
