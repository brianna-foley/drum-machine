import Button from 'react-bootstrap/Button';
import Stack from "react-bootstrap/Stack";

const audioClips = [
  {
    keyCode: 81,
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp..."
  },
  {
    keyCode: 87,
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp..."
  },
  {
    keyCode: 69,
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp..."
  },
  {
    keyCode: 65,
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp..."
  },
  {
    keyCode: 83,
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp..."
  },
  {
    keyCode: 68,
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp..."
  },
  {
    keyCode: 90,
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp..."
  },
  {
    keyCode: 88,
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp..."
  },
  {
    keyCode: 67,
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp..."
  }
];
const buttonRows = document.querySelectorAll('.button-row')

function DrumPads() {
  return (
    <div>
      <Stack direction="horizontal" gap={3} className="mb-3 button-row">

        <Button className="drum-pad">Q</Button>
        <Button className="drum-pad">W</Button>
        <Button className="drum-pad">E</Button>
      </Stack>
      <Stack direction="horizontal" gap={3} className="mb-3 button-row">
        <Button className="drum-pad">A</Button>
        <Button className="drum-pad">S</Button>
        <Button className="drum-pad">D</Button>
      </Stack>
      <Stack direction="horizontal" gap={3} className="mb-3 button-row">
        <Button className="drum-pad">Z</Button>
        <Button className="drum-pad">X</Button>
        <Button className="drum-pad">C</Button>
      </Stack>
    </div>
  );
}

export default DrumPads;
