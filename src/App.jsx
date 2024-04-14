import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Feed from "./components/feed";
import Footer from "./components/footer";
import Trending from "./components/trending";
import Music from "./components/music";
import Fashion from "./components/fashion";
import Culture from "./components/culture";
import SingleIssue from "./components/singleIssue";
import Error from "./components/error";
import SingleIssue2 from "./components/singleIssue2";

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/music" element={<Music />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/issue/:urlTitle" element={<SingleIssue />} />
        <Route path="/issue2/:urlTitle" element={<SingleIssue2 />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
