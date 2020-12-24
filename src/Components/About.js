import '../css/about.css';
import React from 'react'

function About({ data, main }) {
    // var profilepic = "images/" + main.image;

    if (data) {
        var skills = data.skills.map(function (skills) {
            const className = 'bar-expand ' + skills.name.toLowerCase();
            return (
                <li key={skills.name}>
                    <span style={{ width: skills.level }} className={className}></span>
                    {/* <span className="skill-title"></span> */}
                    <b> {skills.level}</b>
                    <em>{skills.name}</em>
                </li>)
        })
    }


    // console.log('skills', skills);

    return (
        <section id="about">
            <div className="soft-skill">
                <div>
                    <div id="chevron"><i className="fab fa-d-and-d-beyond fa-3x" style={{ 'top': '-5px' }}></i></div>
                    <div className="each-skill">Give more than what's expected</div>
                </div>
                <div>
                    <div id="chevron"><i className="far fa-star fa-2x"></i></div>
                    <div className="each-skill">Set high standards</div>
                </div>
                <div>
                    <div id="chevron"><i className="fas fa-rocket fa-2x"></i></div>
                    <div className="each-skill">Embrace accountability</div>
                </div>
                <div>
                    <div id="chevron"><i className="fas fa-hands fa-2x"></i></div>
                    <div className="each-skill">Care deeply</div>
                </div>
            </div>

            <div className="row">
                <div className="column-left">
                    {/* <div className="hexagon" style={{backgroundImage: "url("+'../public/images/IG_Sonny.jpeg'+")"}}><span></span></div> */}
                    <div className="hexagon">
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>

                    <div id="theme-options-wrapper">
                        <div data-mode="light" id="light-mode" className="theme-dot"></div>
                        <div data-mode="blue" id="blue-mode" className="theme-dot"></div>
                        <div data-mode="green" id="green-mode" className="theme-dot"></div>
                        <div data-mode="purple" id="purple-mode" className="theme-dot"></div>
                    </div>
                </div>
                <div className="column-right">
                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
