import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import '../components/Grid.css';
import clsx from 'clsx'
import styles from '../components/Tour/tour.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCartShopping
} from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/Navbar'
import Hero1img from '../components/Herosection/Hero1img'
import Footer from '../components/Footer'
import ShopItem from '../components/Shop/ShopItem'
// import {productApi} from '../api/productApi'
import { productsFetch } from '../features/productSlice'
import { addToCart, getTotals } from "../features/cartSlice";


const Shop = () => {
    const { items, loading } = useSelector((state) => state.products)
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsFetch())
    }, [])

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    console.log(items)
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        // dispatch(onCart(product))
    };

    // const [productlist, setProductlist] = useState([])
    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             const response = await productApi.getAll();
    //             setProductlist(response)
    //         } catch (error) {
    //             console.log('failed to fetch product list:', error)
    //         }
    //     }

    //     fetchProduct();
    // }, [])
    return (
        <>
            <Navbar buttonnav="#f76570" />
            <Hero1img img={require("../assets/img/acticle-3.jpg")}></Hero1img>
            {
                loading === true ? (
                    <h1 style={{ textAlign: "center", color: "black" }}>product Loading</h1>
                ) : (
                    <div className={clsx(styles.tour)} >
                        <div className="grid wide">
                            <div style={{ backgroundColor: "#888", height: "60px", display: "flex", justifyContent: "space-between" }}>
                                <h1 style={{ color: "#fff", lineHeight: "30px", fontSize: "20px", padding: "0 20px" }} >
                                    Shop
                                </h1>
                                <Link to="/cart" style={{ color: "#fff", padding: "15px 60px",textDecoration:"none" }}>
                                    <FontAwesomeIcon style={{ fontSize: "26px" }} icon={faCartShopping} />
                                    <span style={{ fontSize: "20px", paddingLeft:"6px"}}>{cart.cartTotalQuantity}</span>
                                </Link>
                            </div>
                            <div className={clsx("row")}>
                                {
                                    items.map(product => (
                                        <div className="col l-3 c-6" key={product.id}>
                                            <ShopItem
                                                img={product.image}
                                                header={product.title}
                                                price1={product.price}
                                                click={() => { handleAddToCart(product) }}
                                                hidden={product.onCart}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            <Footer />
        </>
    )
}

export default Shop