import React, { useState } from "react";
import SavedTimes from './SavedTimes';
import Timer from './Timer';

function App() {

  const [rounds, setRounds] = useState([]); //kierrosten talletuspaikka

  const addRound = (round) => {   //funktio kierrosten lisäämiseen
    setRounds([...rounds, round]);
  }

  const clearList = () => {   //... ja tyhjentämiseen
    setRounds([]);
  }

  return (
    <div style={{width:'700px'}}>
      <h1>Stopwatch</h1>
      <Timer addRound={addRound}/>
      <SavedTimes rounds={rounds} clearList={clearList}/>
    </div>
  );
}

export default App;
