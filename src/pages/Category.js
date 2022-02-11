import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <>
            <div className="viewContent">
                Category Display
                
                <NavLink state={{name:'Bhargav'}} to="/category/10" className="viewDetails">View Details</NavLink>
            </div>
        </>
    )
}

export default Category;