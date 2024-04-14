import React from "react";
import Issue from "./issue";
import { feedData } from "./FeedData";

export default function Feed() {
  window.scrollTo(0, 0);

  const issueList = feedData.map((issue) => {
    return (
      <Issue
        key={issue.key}
        category={issue.category}
        title={issue.title}
        urlTitle={issue.urlTitle}
        image={issue.image}
        author={issue.author}
        description={issue.description}
        issueTextP1={issue.issueTextP1}
        issueTextP2={issue.issueTextP2}
        issueTextP3={issue.issueTextP3}
        date={issue.date}
        imageHeight={issue.height}
        imageWidth={issue.width}
      />
    );
  });

  return (
    <>
      {/* <div className="hero">
      <div className="headlines-container">
        <div className="column">
          <div className="headline">
          <img
                className="wrapped-images"
                src="https://lh3.googleusercontent.com/pAsnq5eWV2oWcmODFI6Ra7hafMU03dHadY6-0CWsnPAw2wuZzDOQXZae83G5tuyOkfSMJ3C3GWHBK5iypGndTlDgnfqx2nXYHkQ_BU8p8ZrQ5g=s1500-pp"
                alt="Collage image"
              />
              <span>Media</span>
              <p className="collage-titles">Mihlali Ndamase On Centre Stage</p>
          </div>
          
          <div className="headline">
          <img
                className="wrapped-images"
                src="https://lh3.googleusercontent.com/pAsnq5eWV2oWcmODFI6Ra7hafMU03dHadY6-0CWsnPAw2wuZzDOQXZae83G5tuyOkfSMJ3C3GWHBK5iypGndTlDgnfqx2nXYHkQ_BU8p8ZrQ5g=s1500-pp"
                alt="Collage image"
              />
              <span>Media</span>
              <p className="collage-titles">Mihlali Ndamase On Centre Stage</p>
          </div>
        </div>
        
        <div className="column larger-column">
          <div className="headline">
          <img
                className="wrapped-images"
                src="https://lh3.googleusercontent.com/pAsnq5eWV2oWcmODFI6Ra7hafMU03dHadY6-0CWsnPAw2wuZzDOQXZae83G5tuyOkfSMJ3C3GWHBK5iypGndTlDgnfqx2nXYHkQ_BU8p8ZrQ5g=s1500-pp"
                alt="Collage image"
              />
              <span>Media</span>
              <p className="collage-titles">Mihlali Ndamase On Centre Stage</p>
          </div>
        </div>
      </div>
    </div> */}

      <div className="hero">
        <div className="images">
          <div className="image-column">
            <div className="collage-headline">
              <img
                className="wrapped-images"
                src="https://lh3.googleusercontent.com/pAsnq5eWV2oWcmODFI6Ra7hafMU03dHadY6-0CWsnPAw2wuZzDOQXZae83G5tuyOkfSMJ3C3GWHBK5iypGndTlDgnfqx2nXYHkQ_BU8p8ZrQ5g=s1500-pp"
                alt="Collage image"
              />
              <span>Media</span>
              <p className="collage-titles">Mihlali Ndamase On Centre Stage</p>
            </div>
            <div className="collage-headline">
              <img
                className="wrapped-images"
                src="https://wwd.com/wp-content/uploads/2021/08/biggest-fashion-news-2021.jpg"
                alt="Collage image"
              />
              <span>Fashion</span>
              <p className="collage-titles">Latest Fashion News & Stories </p>
            </div>
          </div>

          <div className="image-column">
            <div className="collage-headline larger-headline">
              <img
                id="larger-image"
                src="https://assets.vogue.com/photos/64dbb1b993ebb91b83375c70/3:4/w_960,c_limit/Josh_OConnor_London_2023_Copyright_Anton_Corbijn_01.jpg"
                alt="Collage image"
              />
              <span>Culture</span>
              <p className="collage-titles">Josh O'Connor On Life</p>
            </div>
          </div>

          <div className="image-column">
            <div className="collage-headline">
              <img
                className="wrapped-images"
                src="https://wwd.com/wp-content/uploads/2021/08/biggest-fashion-news-2021.jpg"
                alt="Collage image"
              />
              <span>Fashion</span>
              <p className="collage-titles">Latest Fashion News & Stories</p>
            </div>
            <div className="collage-headline">
              <img
                className="wrapped-images"
                src="https://lh3.googleusercontent.com/pAsnq5eWV2oWcmODFI6Ra7hafMU03dHadY6-0CWsnPAw2wuZzDOQXZae83G5tuyOkfSMJ3C3GWHBK5iypGndTlDgnfqx2nXYHkQ_BU8p8ZrQ5g=s1500-pp"
                alt="Collage image"
              />
              <span>Media</span>
              <p className="collage-titles">Mihlali Ndamase On Centre Stage</p>
            </div>
          </div>
        </div>
      </div>

      <div className="issue-section">
        <div className="section-heading">
          <p>Top</p>
        </div>
        <div className="issue-list-wrapper">{issueList}</div>
      </div>
    </>
  );
}
