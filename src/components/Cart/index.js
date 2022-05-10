import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './cart.css'
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
} from "../../features/cartSlice";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXmark
} from '@fortawesome/free-solid-svg-icons'

const CartItem = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="cart-container" >
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is currently empty</p>
                    <div className="start-shopping">
                        <Link to="/shop">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                            </svg>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <table className="cart-table" cellSpacing="0">
                    <thead>
                        <tr className="titles">
                            <th className="product-thumbnail"></th>
                            <th className="product-title">Product</th>
                            <th className="price">Price</th>
                            <th className="quantity">Quantity</th>
                            <th className="total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.cartItems &&
                            cart.cartItems.map((cartItem) => (
                                <tr className="cart-item" key={cartItem.id}>
                                    <td>
                                        <button className="cart-product__rm" onClick={() => handleRemoveFromCart(cartItem)}>
                                            <FontAwesomeIcon className="cart-product__rmicon" icon={faXmark} />
                                        </button>
                                    </td>
                                    <td className="cart-product">
                                        <img src={cartItem.image} alt={cartItem.name} />
                                        <h3>{cartItem.title}</h3>
                                    </td>
                                    <td className="cart-product-price">${cartItem.price}</td>
                                    <td className="cart-product-quantity">
                                        <button onClick={() => handleDecreaseCart(cartItem)}>
                                            -
                                        </button>
                                        <div className="count">{cartItem.cartQuantity}</div>
                                        <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                    </td>
                                    <td className="cart-product-total-price">
                                        ${cartItem.price * cartItem.cartQuantity}
                                    </td>
                                </tr>
                            ))}


                    </tbody>
                </table>
            )}
            <div className="cart-summary">
                <button className="clear-btn" onClick={() => handleClearCart()}>
                    Clear Cart
                </button>
                <div className="cart-checkout">
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span className="amount">${cart.cartTotalAmount}</span>
                    </div>
                    <p>Taxes and shipping calculated at checkout</p>
                    <button>Check out</button>
                    <div className="continue-shopping">
                        <Link to="/shop">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                            </svg>
                            <span>Continue Shopping</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem