import React from "react";
import { useParams } from "react-router-dom";
import { trendingData } from "./FeedData";

export default function SingleIssue2() {
  window.scrollTo(0, 0);

  const { urlTitle } = useParams();
  const product = trendingData.find((product) => product.urlTitle === urlTitle);

  return (
    <div className="single-issue">
      <div className="issue-hero">
        <div id="issue-heading">
          {product.title} <br />
          <span>
            By {product.author} <br />
            {product.date}
          </span>
        </div>
        <div id="issue-image">
          <img src={product.image} />
        </div>
      </div>
      <div className="issue-text-ads">
        <div className="issue-text">
          {product.issueTextP1} <br />
          <br /> {product.issueTextP2} <br />
          <br /> {product.issueTextP3}
        </div>
      </div>
    </div>
  );
}

// <div className="single-issue">
//     <div className="issue-hero">
//         <div id="issue-heading">Why Is Everyone Suddenly Obsessed With Suits? <br /> I Tried to Find Out <br />
//         <span>By Anathi Kwanda Madela <br />1 September 2023</span></div>
//         <div id="issue-image"><img src="https://assets.vogue.com/photos/64f2324cfe0b44228a8007f4/4:3/w_1600,c_limit/TCDSUIT_EC020.jpg" alt="Suits: Meghan Markle" /></div>
//     </div>
//     <div className="issue-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis laudantium unde soluta expedita aut quod fugit, magni placeat quasi! Maiores cumque eaque quis explicabo, praesentium architecto corporis expedita saepe? Est, culpa doloribus quidem voluptatum pariatur neque. Rem quod delectus sed molestiae, iure culpa provident nam iste vitae quae corrupti quaerat voluptates veritatis corporis atque, voluptatem veniam dolor assumenda aspernatur? Explicabo porro similique veritatis non pariatur iste asperiores a dolorem vero, facere dicta reiciendis alias doloremque suscipit vitae culpa enim placeat hic debitis?
//     </div>
// </div>
