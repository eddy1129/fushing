import { Link } from "react-router-dom"
import Title from "./Title"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sildebar from "./Sildebar";


import { useState, useEffect } from "react"  //React Hook


export default function ProductList() {

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

        <Container style={{ marginLeft: 0, marginRight: 0 }}>
            <Row>
                <Col sm={2}>
                    <Sildebar />

                </Col>
                <Col sm={10}>
                    <div>
                        
                        <Title mainTitle="請選擇要購買的水果" />

                        <div>
                            {
                                productList.map(product => (
                                    <div key={product.id}>
                                        {product.name}<br />
                                        {product.price}<br />
                                        <Link to={'/product/' + product.id}>
                                            <img src={process.env.PUBLIC_URL + '/img/' + product.image} alt={product.name} />
                                        </Link>
                                        <br />
                                        {product.description}<br />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>


    )
}