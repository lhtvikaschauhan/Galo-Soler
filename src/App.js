import React from "react";
import "./App.css";
import SocialFollow from "./social-icons";
import VideoPlayer from "./video";
import Menu from "./menu";
import Feedback from "./feedback";

const App = () => {
  return (
    <div className="App">
      <Menu/>
      <VideoPlayer />
      < div class="socialFeedback">
      <SocialFollow />
      <Feedback/>
      </div>
     
    </div>
  );
};

export default App;
