import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="navBody">
                <div className="navigation">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/category">Category</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default About;