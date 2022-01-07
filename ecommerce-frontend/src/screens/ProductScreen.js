import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  ListGroupItem,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const Button = styled.button`
  padding: 5px 15px;
  background-color: ${({ disabled }) => (disabled ? '#333' : '#657ed4')};
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  color: white;
  width: 120px;
  :hover {
    background-color: ${({ disabled }) => (disabled ? '#555' : '#768fe5')};
  }
`;

const Wrapper = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
`;

function ProductScreen({ match, history }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?quantity=${quantity}`);
  };

  return (
    <>
      <Link to='/' className='btn my-2' style={{ color: '#657ed4' }}>
        Cofnij
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col lg='6' md='6' sm='1'>
            <Image
              src={product.image}
              alt={product.name}
              style={{ width: '100%' }}
            />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3 style={{ color: '#657ed4' }}> {product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} odsłon`}
                  color={'#f8e825'}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Cena: {Math.floor(product.price)} PLN</Col>
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
              <ListGroup variant='flush'>
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
                      {product.countInStock > 0 ? 'dostępny' : 'niedostępny'}
                    </Col>
                  </Row>
                </ListGroupItem>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity</Col>
                      <Col xs='auto' className='my-1'>
                        <Form.Control
                          as='select'
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Wrapper>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      disabled={product.countInStock === 0}
                    >
                      Dodaj
                    </Button>
                  </Wrapper>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
}

export default ProductScreen;
