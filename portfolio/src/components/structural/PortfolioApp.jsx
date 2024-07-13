import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import {Outlet} from "react-router-dom";

import PortfolioLayout from './PortfolioLayout';
import Home from '../content/Home';
import AboutMe from '../content/AboutMe';
import Projects from '../content/Projects';
import Experience from '../content/Experience';

function PortfolioApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PortfolioLayout/>}>
                    <Route index element={<Home />}></Route>
                    <Route path="/about-me" element={<AboutMe/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                    <Route path="/experience" element={<Experience/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default PortfolioApp;