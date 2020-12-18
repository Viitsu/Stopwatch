import React, { useEffect, useState } from 'react';
import './styles.css';

//Komponentti ajanottoa varten
const Timer = ({addRound}) => {

  //talletetaan millisekunnit, sekunnit ja minuutit
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerOn, setTimerOn] = useState(false);  //totuusmuuttuja, joka kertoo on kello päällä vai ei
  const [name, setName] = useState('');   //talletettavan ajan nimitunniste

  useEffect(() => {
    if(timerOn){
        const timer = setInterval(() => {   //setintervalin avulla pidetään yllä aikaa,
        setMilliseconds(milliseconds + 1);  //ei ole ihan täydellisen tarkka, mutta aikataulusyistä johtuen
      }, 8);                              //tuli tehtyä tällainen
      
      if(milliseconds > 99){
        setMilliseconds(0);
        setSeconds(seconds + 1);
      }
      if(seconds === 60){
        setSeconds(0);
        setMinutes(minutes + 1);
      }

      return () => clearInterval(timer);
    }
  }, [timerOn, milliseconds, seconds, minutes]);

  /*painikkeiden logiikat*/
  const start = () => {
    setTimerOn(true);   //start-painikkeen seurauksena asetetaan kello päälle eli trueksi
  }

  const stop = () => {  //stop-painiketta painettaessa nollataan tarvittavat tiedot
    setTimerOn(false);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
  }

  const pause = () => { //pausella vain pysäytetään vain kello, kunnes startilla taas jatketaan
    setTimerOn(false);
  }

  const save = () => {
    let time = showMinutes() + ':' + showSeconds() + '.' + showMilliSeconds();

    if(name === '' || timerOn===false) return   //jos tunnistekenttä on tyhjä, tai kello ei ole käynnissä,
                                                //ei voi tallettaa kierrosta
    addRound(name + ' ' + time);
    setName('');    //lopuksi tunnistekenttä tyhjätään ja kello nollataan
    stop();
  }
  /*--------------------------------*/

  /*apufunktiot, joilla näytetään eri aikayksiköt; tehty lähinnä sitä varten, että nollat tulee näytettyä tarvittaessa */
  const showMilliSeconds = () => {
    if (milliseconds < 10){
      return '0' + milliseconds;
    }
    else return milliseconds;
  } 

  const showSeconds = () => {
    if (seconds < 10){
      return '0' + seconds;
    }
    else return seconds
  }

  const showMinutes= () => {
    if (minutes < 10){
      return '0' + minutes;
    }
    else return minutes;
  }

  const showTime = () => {    //funktio, joka näyttää kokonaisajan
    return <h1>{showMinutes()}:{showSeconds()}.{showMilliSeconds()}</h1>
  }
  /*-----------------------------------------------*/

  const handleChange = (e) => {   //inputin käsittelyyn vaadittava funktio
    setName(e.target.value);
  }

  return (
    <div style={{
      float: 'left',
      backgroundColor: 'lightblue',
      borderStyle: 'solid',
      borderColor: 'black'
    }}>
      {showTime()}
  
      <button onClick={() => {start()}}>Start</button>
      <button onClick={() => {stop()}}>Stop</button>
      <button onClick={() => {pause()}}>Pause</button>
      <br/>
      <input 
        placeholder='title'
        onChange={(e) => handleChange(e)}
        value={name}
      />
      <br/>
      <button onClick={() => save()}>Save</button>

    </div>
  )  
}

export default Timer;