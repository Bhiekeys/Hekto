/** @format */

import { createContext, useState, useEffect } from 'react';
import data from '../mocks/product-data';

const CartContext = createContext();

const cachedProducts = JSON.parse(localStorage.getItem('products')) || data;
const cachedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cachedTotalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(cachedProducts);
  const [cartItems, setCartItems] = useState(cachedCartItems);
  const [totalPrice, setTotalPrice] = useState(cachedTotalPrice);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
  }, [products, cachedCartItems, totalPrice]);

  const handleAddToCart = (item) => {
    let selectedProduct = products.find((product) => product.id === item.id);
    if (!selectedProduct) return;

    selectedProduct = {
      ...selectedProduct,
      quantity: selectedProduct.quantity + 1,
    };
    const updatedProducts = products.map((product) => {
      if (product.id === item.id) {
        return selectedProduct;
      } else {
        return product;
      }
    });

    setProducts(updatedProducts);
    setCartItems([...cartItems, selectedProduct]);
    handleTotalPrice(updatedProducts);
  };

  const handleIncreaseQuantity = (item) => {
    let selectedProduct = products.find((product) => product.id === item.id);
    if (!selectedProduct) return;

    selectedProduct = {
      ...selectedProduct,
      quantity: selectedProduct.quantity + 1,
    };

    const updatedProducts = products.map((product) => {
      if (product.id === item.id) {
        return selectedProduct;
      } else {
        return product;
      }
    });

    const updatedCartItems = cartItems.map((product) => {
      if (product.id === item.id) {
        return selectedProduct;
      } else {
        return product;
      }
    });

    setProducts(updatedProducts);
    setCartItems(updatedCartItems);
    handleTotalPrice(updatedProducts);
  };

  const handleDecreaseQuantity = (item) => {
    let selectedProduct = products.find((product) => product.id === item.id);
    if (!selectedProduct) return;

    selectedProduct = {
      ...selectedProduct,
      quantity: selectedProduct.quantity - 1,
    };

    const updatedProducts = products.map((product) => {
      if (product.id === item.id) {
        return selectedProduct;
      } else {
        return product;
      }
    });

    let updatedCartItems = cartItems.map((product) => {
      if (product.id === item.id) {
        return selectedProduct;
      } else {
        return product;
      }
    });

    if (selectedProduct.quantity === 0) {
      // delete from cart when the quantity of the item is one
      updatedCartItems = updatedCartItems.filter(
        (item) => item.id !== selectedProduct.id
      );
    }

    setProducts(updatedProducts);
    setCartItems(updatedCartItems);
    handleTotalPrice(updatedProducts);
  };

  const handleTotalPrice = (items) => {
    const total = items.reduce((acc, item) => {
      return (acc += item.price * item.quantity);
    }, 0);
    setTotalPrice(total);
  };

  const handleClearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    setProducts(data);
  };

  

  return (
    <CartContext.Provider
      value={{
        products,
        cartItems,
        totalPrice,
        setTotalPrice,
        setCartItems,
        setProducts,
        handleAddToCart,
        handleDecreaseQuantity,
        handleIncreaseQuantity,
        handleClearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
