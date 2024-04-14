import React from 'react'

export default function Issue(props) {
    return (
        <div className="issue-div">                 {/* Link for router */}

            <div className="title-desc-img">
                
                <div id="category"> {props.category} <span></span></div>

                <div className="title-desc">
                    <div id="title">
                        <h1>{props.title}</h1>
                    </div>
                    <div id="description">
                        <p>{props.description}</p>
                    </div>
                    <p id='issue-text'>{props.issueText}<br/> 
                    <span>Read More</span></p>                                          {/* Link for router */}
                </div>

                <div><img id="image" src={props.image} alt="Kabza" height={props.imageHeight} width={props.imageWidth} /></div>
            </div>
        </div>
    )
}