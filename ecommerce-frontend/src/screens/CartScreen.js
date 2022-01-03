import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Row,Col,ListGroup,Image,Form, Button,Card} from 'react-bootstrap'
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

function CartScreen(match, Location, history) {
    const productId = match.params.id
    const quantity = Location.search ? Number(Location.search.split('=')[1]) : 1
    // console.log('quantity', quantity)

    const dispatch = useDispatch()
    
    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId, quantity))
        }
    }, [dispatch, productId, quantity])

    return (
        <div>

        </div>
    )
}

export default CartScreen