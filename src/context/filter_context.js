import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    //To set up the grid view.
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    };

    //To set up the list view.
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    //Sorting Function.
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    };

    //Update the filters value.
    const updateFiltervalue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
    };

    //To clear the filter.
    const clearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    }
    //To sort the product.
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
        dispatch({ type: "SORTING_PRODUCTS" });
    }, [products, state.sorting_value, state.filters]);

    //To load all the products for grid and list view.
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products]);

    return (
        <FilterContext.Provider
            value={{
                ...state,
                setGridView,
                setListView,
                sorting,
                updateFiltervalue,
                clearFilters,
            }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};