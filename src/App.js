import React, { useState } from "react";
import "./App.css";
import SocialFollow from "./social-icons";
import VideoPlayer from "./video";

const App = () => {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    // Handle feedback submission logic
    console.log("Feedback submitted:", feedback);
    setFeedback("");
  };

  const handleSubscribe = () => {
    // Handle subscription logic
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div className="App">
      <header>
        <h1>Solar News</h1>
        <nav>
          <ul>
            <li>
              <a href="https://galosolar.com/">Latest Posts</a>
            </li>
            <li>
              <a href="https://galosolar.com/product-category/solar-inverters-charge-controllers/">
                Featured/Famous Posts
              </a>
            </li>
            <li>
              <a href="https://galosolar.com/product-category/solar-panels/">
                Trending Posts
              </a>
            </li>
            <li>
              <a href="https://galosolar.com/wp-content/uploads/2022/08/Galo-Energy-Company-Profile_.pdf">
                Tags
              </a>
            </li>
            <li>
              <a href="https://galosolar.com/about-us/">About Us</a>
            </li>
          </ul>
        </nav>
      </header>

      <footer>
        <div className="feedback-form">
          <form onSubmit={handleSubmitFeedback}>
            <textarea
              placeholder="Leave your feedback or comment"
              value={feedback}
              onChange={handleFeedbackChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="subscribe-form">
          <button type="button" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>

        <SocialFollow />
      </footer>
      <VideoPlayer />
    </div>
  );
};

export default App;
