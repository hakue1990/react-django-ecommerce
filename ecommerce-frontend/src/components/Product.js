import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  color: #657ed4;
  :hover {
    cursor: pointer;
  }
`;

const Product = ({ product }) => {
  return (
    <Card className='my-3 py-3 rounded card'>
      <Wrapper className='card--title'>{product.name}</Wrapper>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my-3 '>
            {product.rating} z {product.numReviews} odsłon
            <Rating
              value={product.rating}
              text={`${product.numReviews} odsłon`}
              color={'#f8e825'}
            />
          </div>
        </Card.Text>

        <Card.Text as='h3'>{Math.floor(product.price * 3.6)} PLN</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
