import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Issue(props) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function flipBookmarked() {
    setIsBookmarked(!isBookmarked);
  }

  useEffect(() => {
    console.log("Bookmark added");
  }, [isBookmarked]);

  return (
    <div className="issue-div">
      {" "}
      {/* Link for router */}
      <div className="bookmark" onClick={flipBookmarked}>
        {isBookmarked ? (
          <i className="fa-solid fa-bookmark" id="bookmarked-icon"></i>
        ) : (
          <i className="fa-regular fa-bookmark" id="bm-icon"></i>
        )}
      </div>
      <Link to={`/issue/${props.urlTitle}`} className="link">
        <div className="title-desc-img">
          <div className="img-div">
            <img id="image" src={props.image} alt="Issue Image" />
          </div>

          <div id="category">
            {" "}
            {props.category} <span></span>
          </div>

          <div className="title-desc">
            <div id="title">
              <h1>{props.title}</h1>
            </div>
            {/* <div id="description">
                            <p>{props.description}</p>
                        </div> */}
            {/* <p id='issue-text'>{props.issueText}<br/> 
                        <span>Read More</span></p>                                          Link for router */}
          </div>
        </div>
      </Link>
    </div>
  );
}
