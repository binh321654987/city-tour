import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import styles from './Navbar.module.css'
import "../Grid.css"

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import Menu from './Menu/Menu'
import Button from '../Button'

const Navbar = ({ buttonnav }) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", changeNav)
        return ()=>{
            window.removeEventListener("scroll", changeNav)
        }
      }, []);

    const trasparent = scrollNav ? styles.trasparent: "" ;

    return (
        <header className={clsx(styles.header,{[styles.trasparent]:trasparent})}>
            <div className={`grid wide`}>
                <nav className={clsx(styles.header__navbar)}>
                    <Link to="/#" >
                        <img src={require("../../assets/img/logo.png")}
                            alt="" className={clsx(styles.header__logo)} />
                    </Link>
                    <div className={clsx(styles.hidden)}>
                        <Menu />
                    </div>

                    <div className={styles.menu}>
                        {toggleMenu
                            ? ""
                            : <RiMenu3Line style={{ cursor: "pointer", marginRight: "20px" }} color="#888" size={40} onClick={() => setToggleMenu(true)} />
                        }
                        {(toggleMenu && (
                            <>
                                <div className={clsx(styles.modal_overlay)} />
                                <div className={clsx(styles.modal_wrapper)} aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={() => setToggleMenu(false)}>
                                    <div className={clsx(styles.modal)}>
                                        <div className={clsx(styles.slideleft, styles.menu_container, styles.Modal)}>
                                            <RiCloseLine style={{ display: "flex", cursor: "pointer" }} background="#888" color="#fff" size={41} onClick={() => setToggleMenu(false)} />
                                            <Menu />
                                        </div>
                                    </div>
                                </div>

                            </>
                        ))}
                    </div>
                    <Link to="/shop" className={clsx(styles.header__button)}><Button btn btn__primary btn__size_m color={buttonnav}>Book now</Button></Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar