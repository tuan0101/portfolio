import React from 'react'
import '../css/education.css';

function Education({ data }) {

    if (data) {
        var education = data.education.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree}<span>&bull;</span><em className="date">{education.graduated}</em></p>
                <p className="description">{education.description}</p></div>
        })
        var works = data.works.map(function (work) {
            return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p className="description">{work.description}</p>
            </div>
        })
    }

    return (
        <section id="education">

            <div className="education">
                <div className="minor-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="main-col">
                    <div className="item">
                        <div className="school">
                            {education}
                        </div>
                    </div>
                </div>
            </div>


            <div className="work">

                <div className="minor-col">
                    <h1><span>Work</span></h1>
                </div>

                <div className="main-col">
                    {works}
                </div>
            </div>

        </section>
    )
}

export default Education
