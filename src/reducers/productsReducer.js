import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    STARTING_PRODUCT_DOWNLOAD,
    PRODUCT_DOWNLOAD_SUCCESS,
    PRODUCT_DOWNLOAD_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETED_SUCCESS,
    PRODUCT_DELETED_ERROR,
    GET_PRODUCT_EDIT,
    PRODUCT_EDITED_SUCCESS,
    PRODUCT_EDITED_ERROR
} from '../types';

const initialState = {
    products: [],
    error: null,
    loading: false,
    productDelete: null,
    productEdit: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case STARTING_PRODUCT_DOWNLOAD:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case PRODUCT_DOWNLOAD_ERROR:
        case ADD_PRODUCT_ERROR:
        case PRODUCT_DELETED_ERROR:
        case PRODUCT_EDITED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case PRODUCT_DOWNLOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case GET_PRODUCT_DELETE:
            return {
                ...state,
                productDelete: action.payload
            }
        case PRODUCT_DELETED_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.productDelete),
                productDelete: null
            }
        case GET_PRODUCT_EDIT:
            return {
                ...state,
                productEdit: action.payload
            }
        case PRODUCT_EDITED_SUCCESS:
            return {
                ...state,
                productEdit: null,
                products: state.products.map(product => 
                    product.id === action.payload.id ? product = action.payload : product
                )
            }
        default:
            return state;
    }
};