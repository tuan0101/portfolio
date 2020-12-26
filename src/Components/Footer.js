import React from 'react'
import '../css/footer.css';

function Footer() {
    return (
        <div id="footer">
            <a className="smoothscroll" title="Back to Top" href="#home">
            <div className="up-arrow">
                <i className="fas fa-angle-double-up fa-2x"></i>
            </div>
            </a>
            <div className="social-section">
                <a href="https://www.linkedin.com/in/tuan-pham-a76305202/" 
                    className="social-icon"  target="_blank">
                    <i className="fab fa-linkedin-in fa-2x"></i>
                </a>
                <a href="https://github.com/tuan0101" 
                    className="social-icon"  target="_blank">
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </div>
            <div className="author">Tuan Pham <span>©2020</span></div>
        </div>
    )
}

export default Footer
