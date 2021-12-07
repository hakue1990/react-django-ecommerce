import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import styled from "styled-components";
import axios from "axios";

const Button = styled.button`
  padding: 5px 15px;
  background-color: ${({ disabled }) => (disabled ? "#333" : "#657ed4")};

  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  color: white;
  width: 120px;

  :hover {
    background-color: ${({ disabled }) => (disabled ? "#555" : "#768fe5")};
  }
`;

const Wrapper = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
`;

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([]);

  //Komponent został zamontowany - wykona sę raz
  useEffect(() => {
    console.log("use effect trigger");

    async function fetchProducts() {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    }

    fetchProducts();

    // url naszego backendu w Django
  }, []);
  return (
    <>
      <Link to="/" className="btn my-2" style={{ color: "#657ed4" }}>
        Cofnij
      </Link>
      <Row>
        <Col lg="6" md="6" sm="1">
          <Image
            src={product.image}
            alt={product.name}
            style={{ width: "100%" }}
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3 style={{ color: "#657ed4" }}> {product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} odsłon`}
                color={"#f8e825"}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Cena: {Math.floor(product.price * 3.6)} PLN</Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <h4>Opis:</h4>
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Cena:</Col>
                  <Col>
                    <strong>{product.price} PLN</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "dostępny" : "niedostępny"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroup.Item>
                <Wrapper>
                  <Button disabled>Dodaj</Button>
                </Wrapper>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
