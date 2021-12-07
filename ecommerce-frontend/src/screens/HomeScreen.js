import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import styled from "styled-components";
import axios from "axios";

const H1 = styled.h1`
  color: #657ed4;
  text-decoration: underline;
  transition: color 0.3s, ease-in;

  :hover {
    cursor: pointer;
    color: #0a014f;
  }
`;

export const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLopading] = useState(true);

  //Komponent został zamontowany - wykona sę raz
  useEffect(() => {
    console.log("use effect trigger");

    async function fetchProducts() {
      const { data } = await axios.get("/api/products/");
      await setIsLopading(false);
      await setProducts(data);
    }

    fetchProducts();

    // url naszego backendu w Django
  }, []);

  return (
    <>
      <Row>
        <H1>Najnowsze produkty:</H1>
        {isLoading && <h1>Ładowanie...</h1>}
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeScreen;
