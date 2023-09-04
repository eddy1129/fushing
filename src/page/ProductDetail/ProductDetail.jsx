import { useParams, Link } from "react-router-dom";
import productsData from "../../Product/ProductData";
import DetailBox from "../../component/DetailBox";
import aData from "../../Product/Adata";
import Lanterns from "../../Product/Lanterns";
import GlowStick from "../../Product/GlowStick";

export default function ProductDetail() {
  let params = useParams();
  const splitParams = params.id.split("_");
  const productType = splitParams[0]; // "GlowStick"
  const index = parseInt(splitParams[1]); // 0

  let dataX;

  switch (productType) {
    case "GlowStick":
      dataX = GlowStick;
      break;
    case "Autumn":
      dataX = aData;
      break;
    case "Lanterns":
      dataX = Lanterns;
      break;
    default:
      dataX = productsData;
  }

  const productsList = dataX.map((item) => {
    if (item.id === index && item.product_type === productType) {
      return (
        <DetailBox
          key={item.id}
          id={item.id}
          product_type={item.product_type}
          product_name={item.product_name}
          size={item.size}
          price={item.price}
          image={item.image}
        />
      );
    } else {
      return null; // or any other alternative component or JSX you want to render for other items
    }
  });

  return (
    <>
      <div id="productDetail">{productsList}</div>
    </>
  );
}
