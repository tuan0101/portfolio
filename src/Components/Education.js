import React from 'react'
import '../css/education.css';

function Education({ data }) {

    if (data) {
        var works = data.works.map(function (work) {
            return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                <p className="description">{work.description.split('\n').map(line => <p><text>{'\u25cf'}</text> {line}</p>)}</p>
            </div>
        })
        var education = data.education.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                <p className="info">{education.degree}<span>&bull;</span><em className="date">{education.graduated}</em></p>
                <p className="description">{education.description}</p></div>
        })
    }

    return (
        <section id="education">

            <div className="education">
                <div className="minor-col">
                    <h1><span>Work</span></h1>
                </div>

                <div className="main-col">
                    <div className="item">
                        <div className="school">
                            {works}
                        </div>
                    </div>
                </div>
            </div>


            <div className="work">

                <div className="minor-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="main-col">
                    {education}
                </div>
            </div>

        </section>
    )
}

export default Education
