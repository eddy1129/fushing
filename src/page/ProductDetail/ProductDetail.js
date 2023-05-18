import { useParams, Link } from "react-router-dom";
import Title from "../../component/Title";

export default function ProductDetail() {
  let params = useParams();

  //useEffect

  return (
    <div>
      <Title mainTitle={params.id + "產品資料"} />

      <Link to="/">回到產品列表</Link>
    </div>
  );
}