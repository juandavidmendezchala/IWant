import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { listProducts } from '../actions/productActions';

export default function HomeScreen(){

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList

  useEffect(() => {
      dispatch(listProducts())
  }, [])

    return(
      <div>
        {
          loading? <LoadingBox></LoadingBox>
          :
          error?<MessageBox variant="danger">{error}</MessageBox>
          :
          <div className="row-center">
          {
            products.map(p =>(
              <Product key={p._id} product={p}></Product>
            ))
          }            
        </div>   
        }      
      </div>      
    )
}