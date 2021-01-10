import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title, image, size}) => (
    <div 
        className={`${size} menu-item`}
    >
        <div 
        style={{background: `url(${image})`}}
        className="background-image" />
            <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
)
export default MenuItem;