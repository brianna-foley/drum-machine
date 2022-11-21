import Card from "react-bootstrap/Card";
import DrumPads from './DrumPads'
import Display from './Display'
import React from "react";

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: ''
    };
  }
  updateDisplay(display) {
    this.setState({ display })
  }

  render() {
    return (
      <div id="drum-machine">
        <h1 className='pt-5'>Drum Machine</h1>
        <Card id="card">
          <Card.Body id="drum-pads">
            <DrumPads />
          </Card.Body>
          <Card.Body className="item" id="controls">
            <Display />
          </Card.Body>
        </Card>
      </div>
    );
  }
}
