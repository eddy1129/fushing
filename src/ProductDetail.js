import {useParams, Link} from "react-router-dom"
import Title from "./Title"

export default function ProductDetail() {

    let params = useParams()

    let [productList, setProductList] = useState([])

    //useEffect
    useEffect(() => {
        //1 : 無第二個參數 : component每次render都會觸發
        //2 : Dependency Array是空array時 : 只會在第一次網頁render時會觸發
        //3 : Dependency Array是有變數時 : 第一次網頁render時 + 指定的變數改變 會觸發
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
            .then(response => response.json())
            .then(data => setProductList(data))

        
    }, []) // <==  Dependency Array

    console.log(productList)

    return (
        <div>
            <Title mainTitle={params.id+'產品資料'} />

            <Link to="/">回到產品列表</Link>
        </div>
    )
}