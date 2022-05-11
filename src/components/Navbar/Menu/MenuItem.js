import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'

import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import clsx from 'clsx';
import styles from "./menu.module.css";

const MenuItem = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    
    return (
        <li className={clsx(styles.navbarlist__item)}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
        >
            {items.submenu ? (
                <>
                    <LinkS to={items.to}  
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500}
                        className={styles.navbarlist__item__link}
                        aria-expanded={dropdown ? "true" : "false"}
                        // onClick={() => setDropdown((prev) => !prev)}
                        // onMouseEnter={() => setDropdown((prev) => !prev)}
                        // onMouseLeave={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}
                        {depthLevel > 0 ? <FontAwesomeIcon className={clsx(styles.subicon)} icon={faCaretRight} />
                            : <span className="arrow" />}
                    </LinkS>
                    <Dropdown key={items} depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <Link to={items.to} className={styles.navbarlist__item__link}>{items.title}</Link>
            )}
        </li>
    )
}

export default MenuItem