import React, { useState, useEffect } from 'react'

import "../Grid.css"
import clsx from 'clsx'
import styles from './acticle.module.css'

import ArticleItem from './ArticleItem'

const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])
    return { width }
}

const Article = () => {
    const viewport = useViewport()
    const isMobile = viewport.width <= 1024;

    if (isMobile) {
        return (
            <div id="article" className={clsx(styles.acticle)} >
                <div className={clsx("grid wide")}>
                    <div className={clsx(styles.acticle_header)}>
                        <h4>FROM THE BLOG</h4>
                        <h1 className={clsx(styles.acticle_header__main)}>ARTICLES &  <span>NEWS</span></h1>
                    </div>
                    <div className="row">
                        <div className="col l-6 c-12">
                            <ArticleItem
                                to="navbar"
                                title="OUR NEWS"
                                header="Travel Events"
                                description="Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis."
                                colorbutton="#ba71da"
                                img={require("../../assets/img/acticle-1.jpg")}
                            />
                        </div>
                        <div className="col l-6 c-12">
                            <ArticleItem
                                to="navbar"
                                title="TRAVEL TIPS"
                                header="New Routes"
                                description="Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis."
                                colorcontent="#14b9d5"
                                colortext="#fff"
                                colorbutton="#fff"
                                img={require("../../assets/img/acticle-2.jpg")}
                                rowreverse
                            />
                        </div>
                        <div className="col l-6 c-12">
                            <ArticleItem
                                to="navbar"
                                title="OUR NEWS"
                                header="Best Beaches"
                                description="Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis."
                                colorcontent="#1bbc9b"
                                colortext="#fff"
                                colorbutton="#fff"
                                img={require("../../assets/img/acticle-3.jpg")}
                            />
                        </div>
                        <div className="col l-6 c-12">
                            <ArticleItem
                                to="navbar"
                                title="TRAVEL TIPS"
                                header="Love Travel"
                                description="Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis."
                                colorbutton="#f76570"
                                img={require("../../assets/img/acticle-4.jpg")}
                                rowreverse
                            />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div id="article" className={clsx(styles.acticle)}>
            <div className={clsx("grid wide")}>
                <div className={clsx(styles.acticle_header)}>
                    <h4>FROM THE BLOG</h4>
                    <h1 className={clsx(styles.acticle_header__main)}>ARTICLES &  <span>NEWS</span></h1>
                </div>
                <div className="row">
                    <div className="col l-6 c-12">
                        <ArticleItem
                            to="/"
                            title="OUR NEWS"
                            header="Travel Events"
                            description="Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis."
                            colorbutton="#ba71da"
                            img={require("../../assets/img/acticle-1.jpg")}
                        />
                    </div>
                    <div className="col l-6 c-12">
                        <ArticleItem
                            to="/a"
                            title="TRAVEL TIPS"
                            header="New Routes"
                            description="Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis."
                            colorcontent="#1bbc9b"
                            colortext="#fff"
                            colorbutton="#fff"
                            img={require("../../assets/img/acticle-2.jpg")}
                        />
                    </div>
                    <div className="col l-6 c-12">
                        <ArticleItem
                            to="/a"
                            title="OUR NEWS"
                            header="Best Beaches"
                            description="Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis."
                            colorcontent="#14b9d5"
                            colortext="#fff"
                            colorbutton="#fff"
                            img={require("../../assets/img/acticle-3.jpg")}
                            rowreverse
                        />
                    </div>
                    <div className="col l-6 c-12">
                        <ArticleItem
                            to="/a"
                            title="TRAVEL TIPS"
                            header="Love Travel"
                            description="Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis."
                            colorbutton="#f76570"
                            img={require("../../assets/img/acticle-4.jpg")}
                            rowreverse
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article