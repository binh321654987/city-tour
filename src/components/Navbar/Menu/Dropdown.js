import React from 'react'

import clsx from 'clsx'
import styles from "./menu.module.css";
import MenuItem from "./MenuItem"

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? styles.sub__menu : "";
    const show = dropdown ? styles.show : ""
    return (
        <ul className={clsx(styles.dropdown, {[dropdownClass]:dropdownClass},
            { [styles.show]: show, }
        )}>
            {submenus.map(submenu => (
                <div key={submenu.id}>
                    {/* <li key={index} className={clsx(styles.dropdown__item)}>
                        <a href="/#">{submenu.title}</a>
                    </li> */}
                    <MenuItem items={submenu} depthLevel={depthLevel} />
                </div>
            ))}
        </ul>
    )
}

export default Dropdown