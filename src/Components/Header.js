import React from 'react';
import '../css/header.css';

function Header() {
    return (
        <header id="home">
            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#project">Projects</a></li>
                    <li><a className="smoothscroll" href="#education">Education</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>

            </nav>

            <div className="banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">
                        I'm <span className="name">Tuan Pham</span>
                        <span className="dot">.</span></h1>
                    <h2>I'm a Software Developer.</h2>
                    <hr />
                    <a className="smoothscroll" href="#about">
                        <div className="view-more">
                            {/* {networks} */}
                            View My Work
                            <span className="scroll-icon ">
                                <i className="fas fa-arrow-alt-circle-down fa-lg"></i>
                            </span>
                        </div>
                    </a>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="fas fa-chevron-circle-down fa-2x"></i>
                </a>
            </p>

            <div className="front-header"></div>
            <div className="header-background"></div>
            <div className="stars"></div>
            <div className="stars1"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            <div className="twinkling"></div>
        </header>

    )
}

export default Header
