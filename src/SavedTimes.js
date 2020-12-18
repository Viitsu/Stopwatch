import React from 'react';
import './styles.css';

//Komponentti, joka näyttää talletetut kierrokset; rounds ja clearList tulee App.js:stä
const SavedTimes = ({rounds, clearList}) => {   

  return (
    <div style={{
      float: 'right',
      backgroundColor: "lightgrey",
      borderStyle: 'solid',
      borderColor: 'black'
    }}>
      <h1>Saved times</h1>

      <button onClick={() => clearList()}>Clear</button>

      <div style={{ 
        overflow: 'auto',
        textAlign: 'center',
        height: '180px',
        width: 'auto'
      }}>
        {rounds.length === 0 && <p>List empty</p>}

          {rounds.map((item, index) => {
              return (
                  <p key={index}>{item}</p>
              );
          })}
      </div>
    </div>
  ) 
}

export default SavedTimes;