import React from 'react'

import styles from './footer.module.css'
import clsx from 'clsx'
import '../Grid.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {
    faFacebook,
    faInstagram,
    faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className={clsx(styles.footer)}>
            <div className="grid wide">
                <div className={clsx(styles.footer_container)}>
                    <div className={clsx(styles.footer_item)}>
                        <div className={clsx(styles.footer_item__description)}>
                            <img src={require("../../assets/img/logo.png")} alt="" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Curabitur ut diam et nibh
                                <u> condimentum </u>
                                venenatis eu ac magnasin. Quisque interdum est mauris, eget ullamcorper.
                            </p>
                            <div className={clsx(styles.footer_media)}>
                                <a href="https://twitter.com/" >
                                    <FontAwesomeIcon className={clsx(styles.footer_media__icon)} icon={faTwitter} />
                                </a>
                                <a href="https://facebook.com/">
                                    <FontAwesomeIcon className={clsx(styles.footer_media__icon)} icon={faFacebook} />
                                </a>
                                <a href="https://Youtube.com/">
                                    <FontAwesomeIcon className={clsx(styles.footer_media__icon)} icon={faYoutube} />
                                </a>
                                <a href="https://Instagram.com/">
                                    <FontAwesomeIcon className={clsx(styles.footer_media__icon)} icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                        <div className={clsx(styles.footer_item__forward)}>
                            <h3 style={{
                                color: "#555", fontSize: "14px", margin: 0,
                                lineHeight: "14px", letterSpacing: "2px", fontWeight: "bold"
                            }}>
                                OUR AGENCY
                            </h3>
                            <ul className={clsx(styles.footer_item__forwardlist)}>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    Services
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    Insurancee
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    Agency
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    Tourism
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    Payment
                                </div>
                            </ul>
                        </div>
                        <div className={clsx(styles.footer_item__forward)}>
                            <h3 style={{
                                color: "#555", fontSize: "14px", margin: 0,
                                lineHeight: "14px", letterSpacing: "2px", fontWeight: "bold"
                            }}>
                                PARTNERS
                            </h3>
                            <ul className={clsx(styles.footer_item__forwardlist)}>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    <i className="footer_item-icon fas fa-chevron-right"></i>
                                    Booking
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    RentalCar
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    HostelWorld
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    Trivago
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    TripAdvisor
                                </div>
                            </ul>
                        </div>
                        <div className={clsx(styles.footer_item__forward)}>
                            <h3 style={{
                                color: "#555", fontSize: "14px", margin: 0,
                                lineHeight: "14px", letterSpacing: "2px", fontWeight: "bold"
                            }}>
                                LAST MINUTE
                            </h3>
                            <ul className={clsx(styles.footer_item__forwardlist)}>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    London
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    California
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    Indonesia
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    Europe
                                </div>
                                <div className={clsx(styles.footer_item__forwardcons)}>
                                    <FontAwesomeIcon className={clsx(styles.footer_item__icon)} icon={faChevronRight} />
                                    VietNam
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className={clsx(styles.footer_copyright)}>
                        <p>THE BEST WORDPRESS TRAVEL THEME</p>
                        <p>COPYRIGHT NICDARK THEMES 2018</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer