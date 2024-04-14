import React from "react";
import "./Trending.css";
import { trendingData } from "./FeedData";
import Issue2 from "./issue2";

export default function Trending() {
  window.scrollTo(0, 0);

  const trendingList = trendingData.map((issue) => {
    return (
      <Issue2
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
      <section className="trending-section">
        <div className="section-heading">
          <p>Trending</p>
        </div>
        <div className="issue-list-wrapper">{trendingList}</div>
      </section>
    </>
  );
}
