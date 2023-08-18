import { useParams, Link } from "react-router-dom";
import Title from "../../component/Title";
import productsData from "../../Product/ProductData";
import ProductItem from "../../component/ProductItem";
import classes from "./ProductDetail.module.css";

export default function ProductDetail() {
  let params = useParams();

  const productsList = productsData.map((item) => {
    console.log(`item.id ${item.id} params = ${params.id}`);
    if (item.id === parseInt(params.id)) {
      return (
        <ProductItem
          key={item.id}
          id={item.id}
          product_type={item.product_type}
          product_name={item.product_name}
          size={item.size}
          price={item.price}
          image={item.image}
          width={300}
        />
      );
    } else {
      return null; // or any other alternative component or JSX you want to render for other items
    }
  });

  return (
    <div className={classes.detailContent}>
      <Title mainTitle={productsList[params.id]?.props.product_name} />
      {productsList}
      <Link to="/">返回主目錄</Link>
    </div>
  );
}
