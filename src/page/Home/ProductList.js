import Sildebar from "../../component/Sildebar";
import productsData from "../../Product/ProductData";
import classes from "./ProductsList.module.css";
import ProductItem from "../../component/ProductItem";

export default function ProductList() {
    const productsList = productsData.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      product_type={item.product_type}
      product_name={item.product_name}
      size={item.size}
      price={item.price}
      image={item.image}
    />
  ));  
  return (
    <div className={classes.container}>
      <div className={classes.sm2}>
        <Sildebar />
      </div>
      <div className={classes.sm10}>
        <div>
          <div className={classes.productTable}>
            { productsList }
          </div>
        </div>
      </div>
    </div>
  );
}
