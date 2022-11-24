import './App.css';
import { render } from '@testing-library/react';
import Button from 'react-bootstrap/Button';
import React from 'react';

const audioClips = [
  {
    keyCode: 81,
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    sound: "Heater-1"
  },
  {
    keyCode: 87,
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    sound: "Heater-2"
  },
  {
    keyCode: 69,
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    sound: "Heater-3"
  },
  {
    keyCode: 65,
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    sound: "Heater-4"
  },
  {
    keyCode: 83,
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    sound: "Heater-6"
  },
  {
    keyCode: 68,
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    sound: "Dsc_Oh"
  },
  {
    keyCode: 90,
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    sound: "Kick_n_Hat"
  },
  {
    keyCode: 88,
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    sound: "RP4_KICK_1"
  },
  {
    keyCode: 67,
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    sound: "Cev_H2"
  }
];
function App() {
  const [display, setDisplay] = React.useState('');
  return (
    <div className="min-vh-100 text-white" id="page">
      <div className="text-center" id="drum-machine">
        <h2 id="page-header">Drum Machine</h2>
        <div id="drum-container">
          <div id="drum-pads" className="d-flex flex-wrap justify-content-center">
            {audioClips.map(clip => {
              return <Pad
              clip={clip}
              key={clip.text}
              setDisplay={setDisplay}
              />
            })}
          </div>
          <div id="display" className="bg-secondary">
            <h4>{display}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pad({clip, setDisplay}) {

  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  })

  const handleKeyPress = (event) => {
    if(event.keyCode === clip.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const audioTag = document.getElementById(clip.text);
    setActive(true);
    setTimeout(() => setActive(false), 200)
    audioTag.currentTime = 0
    audioTag.play();
    setDisplay(clip.sound)
  };

  return (
    <Button onClick={playSound} className={`drum-pad btn btn-secondary p-4 m-3 ${active && 'btn-warning'}`} id={clip.sound}>
      <audio className="clip" id={clip.text} src={clip.src}/>
      {clip.text}
    </Button>
  );
}
export default App;
