import React, { useState, useRef, useEffect } from 'react'
import '../css/project.css';

function Project({ data }) {
    const [show, setShow] = useState(false);
    const [flag, setFlag] = useState(false);
    const [id, setID] = useState(-1);

    const iframe = useRef(null);

    const showProject = (projectID) => {
        // if (projectID != null) {
        setID(projectID);
        setFlag(true);
        // }
    }

    useEffect(() => {
        if (flag) {
            setShow(true);
            setFlag(false);
        }
    }, [flag])

    if (data) {
        // thump nails
        var projects = data.projects.map(function (project) {
            var projectImage = 'portfolio/' + project.image;
            return <div key={project.title} className="project">
                {/* project.id%2*300 => delay animation for each pair of project */}
                <div className="item-wrap" data-aos="flip-right" data-aos-delay={project.id%3*150} data-aos-duration="1000">
                    <img alt={project.title} src={projectImage} />
                    <div className="overlay">
                        <div className="project-item">
                            <h5>{project.title}</h5>
                            <h5 className="project-category">{project.category}</h5>
                            <button onClick={() => showProject(project.id)}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    const stopVideo = function () {
        // console.log('iframe.src', iframe.current.src);
        var iframeSrc = iframe.current.src;
        iframe.current.src = iframeSrc;
    };

    const handleClick = (e) => {
        stopVideo();
        if (e.target.className !== "modal-contents") {
            // console.log('e.target.className', e.target.className);
            setShow(false);
        }
    }

    return (
        <section id="project">
            {/* <button onClick={printMe} style={style}>print</button> */}
            <div className="project-body">
                <h3>CHECK OUT SOME OF MY PROJECTS</h3>
                <div className="project-group">
                    {projects}

                </div>

                {data && id !== -1 &&
                    <div className={show ? "modal" : "m-hidden"}
                        onClick={(e) => handleClick(e)}
                    >
                        <div className="modal-contents" onClick={e => e.stopPropagation()}>
                            <iframe width="420" height="315"
                                title={data.projects[id].title}
                                ref={iframe}
                                src={data.projects[id].url}
                                frameBorder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                            <h3>{data.projects[id].title}</h3>
                            {data.projects[id].content.url ?
                                <a href={data.projects[id].content.url} target="_blank" rel="noreferrer">
                                    {data.projects[id].content.url}
                                </a> : ""}
                            <hr />
                            <p>{data.projects[id].content.description}</p>
                            <div>
                                <a href={data.projects[id].content.github} 
                                    target="_blank" rel="noreferrer">
                                    <button>Github</button>
                                </a>
                                <i className="fas fa-window-close fa-2x" onClick={(e) => handleClick(e)}></i>
                            </div>
                        </div>
                    </div>}
            </div>

        </section>
    )
}

export default Project
