import React, { useState, useRef } from 'react'
import '../css/project.css';

function Project({ data }) {
    const [show, setShow] = useState(false);

    const iframe = useRef(null);

    if (data) {
        var projects = data.projects.map(function (projects) {
            var projectImage = 'portfolio/' + projects.image;
            return <div key={projects.title} className="project">
                <div className="item-wrap">
                    <img alt={projects.title} src={projectImage} />
                    <div className="overlay">
                        <div className="project-item">
                            <h5>{projects.title}</h5>
                            <button onClick={() => setShow(true)}>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    // const stopVideo = function ( ) {
    //     console.log('iframe.src', iframe.current.src);
    //     var iframeSrc = iframe.current.src;
	// 	iframe.current.src = iframeSrc;
    // };

    const handleClick = (e) => {
        // stopVideo();
        if (e.target.className !== "modal-contents") {
            // console.log('e.target.className', e.target.className);
            setShow(false);
        }
    }
    return (
        <div id="project">
            <div className="project-body">
                <h3>CHECK OUT SOME OF MY PROJECTS</h3>
                <div className="project-group">
                    {projects}
                    <div className="project"></div>
                    <div className="project"></div>
                </div>

                <div className={show ? "modal" : "m-hidden"}
                    onClick={(e) => handleClick(e)}
                >
                    <div className="modal-contents"  onClick={e => e.stopPropagation()}>
                    <iframe width="420" height="315" 
                        // ref={iframe}  
                        src={data?.projects[0].url}
                        frameBorder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>                     
                    </iframe>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project
