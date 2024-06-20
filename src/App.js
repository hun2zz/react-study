import React from "react";
import Player from "./components/Ref/Player";
import TimerChallenge from "./components/Ref/TimeChallenge";

const App = () => {
  return (
    <>
      <Player></Player>
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}></TimerChallenge>
        <TimerChallenge title="Not Easy" targetTime={5}></TimerChallenge>
        <TimerChallenge title="Getting Tough" targetTime={10}></TimerChallenge>
        <TimerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
};

export default App;
