import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { listProducts } from "../actions/productActions";

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
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error,loading, products} = productList
  const [isLoading, setIsLopading] = useState(true);

  //Komponent został zamontowany - wykona sę raz
  useEffect(() => {
    console.log("use effect trigger");
    dispatch(listProducts())


    // url naszego backendu w Django
  }, [dispatch]);
  return (
    <>
      
        <H1>Najnowsze produkty:</H1>
        {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>
        : 
        <Row>
          {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      }
        
    </>
  );
};
export default HomeScreen;
