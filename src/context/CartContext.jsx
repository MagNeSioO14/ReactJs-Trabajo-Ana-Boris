import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }

    const removerItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    }
  
    const estaAgregado = (id) => {
      return cart.some((item) => item.id === id)
    }

    const totalCompra = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const totalCantidad = () => {
        return cart.reduce((acc,item) => acc + item.cantidad, 0)
    }

    return(
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            estaAgregado,
            totalCompra,
            vaciarCarrito,
            totalCantidad,
            removerItem
        }}
        >
            {children}
        </CartContext.Provider>
    )
}