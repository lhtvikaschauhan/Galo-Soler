import React, { useState } from "react";



export default function Feedback() {
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

    const [feedback, setFeedback] = useState("");
    const [email, setEmail] = useState("");
    
    return (
      <div >
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

        
      </footer>
      </div>
    );
  }