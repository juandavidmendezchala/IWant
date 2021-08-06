import axios from 'axios'
import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_SUCCESS,
} from '../constants/orderConstants.js'
import {CART_EMPTY} from '../constants/cartConstants.js'


export const createdOrder = (order) => async (dispatch, getState) => {
    dispatch({type: ORDER_CREATE_REQUEST, payload: order});
    try {
        const {
            userSignin:{userInfo},
         } = getState(); 
        const {data} = await axios.post('/api/orders', order, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        })
        dispatch({type: ORDER_CREATE_SUCCESS, payload: data.order});
        dispatch({type: CART_EMPTY})
        localStorage.removeItem('cartItems')
    } catch(err) {
        dispatch({type: ORDER_CREATE_FAIL,
        payload: err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    })
  }
}