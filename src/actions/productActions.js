import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';

export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch(addProduct());

        try {
            dispatch(addProductSuccess(product));
        } catch (error) {
            dispatch(addProductError(true));
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

// If product is successfully saved in DB
const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

// If there's error saving
const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})