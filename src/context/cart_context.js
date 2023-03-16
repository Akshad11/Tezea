import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const cartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("trezeaCart");
    if (localCartData === []) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};

const initialState = {
    //cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    };

    //Increment and decrement the product.

    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
    };

    const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
    };

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    useEffect(() => {
        dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

        localStorage.setItem("trezeaCart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <cartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrement }}>
            {children}
        </cartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(cartContext);
};

export { CartProvider, useCartContext };