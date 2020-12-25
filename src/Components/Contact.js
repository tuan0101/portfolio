import React from 'react'
import '../css/contact.css';

function Contact({ data }) {
    return (
        <div id="contact">
            <div className="info">

                <h5>Address and Phone</h5>
                <p className="address">
                    {data?.name}<br />
                    {data?.address.street} <br />
                    {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
                    <span>{data?.phone}</span>
                </p>
            </div>
            <div className="email">
                <i className="far fa-envelope fa-2x"></i>
                <p>tuanpham@oakland.edu</p>
            </div>
        </div>
    )
}

export default Contact
