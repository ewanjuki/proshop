import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../components/ProductItem";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

function Home() {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  let content;

  if (loading) {
    content = <Loader />;
  }

  if (!loading && error) {
    content = <Message variant="danger">{error}</Message>;
  }

  if (!loading && !error && products.length > 0) {
    content = (
      <>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      </>
    );
  }

  return content;
}

export default Home;
