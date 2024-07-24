import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        let exists = isInCart(product.id);
        if (exists) {
            let newArray = cart.map((elemento) => {
                if (elemento.id === product.id) {
                    return {
                        ...elemento,
                        quentity: elemento.quantity + product.quantity
                    };
                } else {
                    return elemento;
                }
            });
            setCart(newArray);
        } else {
            setCart([...cart, product]);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        let exists = cart.some((product) => product.id === id);
        return exists;
    };

    const deleteProduct = (id) => {
        let newArr = cart.filter((elemento) => elemento.id !== id);
        setCart(newArr);
    };

    let data = {cart, addToCart, clearCart, deleteProduct};

    return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartContextProvider;