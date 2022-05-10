import React from 'react'
import { menuItems } from "./MenuItems";

import clsx from 'clsx'
import styles from "./menu.module.css";
import MenuItem from './MenuItem'

const Menu = () => {
    return (
        <ul className={clsx(styles.navbarlist)}>
            {menuItems.map(menu => {
                const depthLevel = 0;
                return <MenuItem items={menu} key={menu.id} depthLevel={depthLevel} />;
                // <li className={clsx(styles.navbarlist__item)} key={index}>
                //     <Link to="/#" className={styles.navbarlist__item__link}>{menu.title}</Link>
                // </li>
            })}
        </ul>
    )
}

export default Menu