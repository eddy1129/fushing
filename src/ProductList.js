import { Link } from "react-router-dom";
import Sildebar from "./Sildebar";
import productsData from "./Product/ProductData";
import classes from "./ProductsList.module.css";

export default function ProductList() {
  return (
    <div className={classes.container}>
      <div className={classes.sm2}>
        <Sildebar />
      </div>
      <div className={classes.sm10}>
        <div>
          <div>
            {productsData.map((product) => (
              <div key={product.id}>
                {product.name}
                <br />
                {product.price}
                <br />
                <Link to={"/product/" + product.id}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
