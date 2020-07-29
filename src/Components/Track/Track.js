import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.playAudio = this.playAudio.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  playAudio() {
    const music = document.getElementById(`${this.props.track.previewURL}`);
    const pButton = document.getElementById(`${this.props.track.id}`);
  	if (music.paused) {
  		music.play();
  		pButton.className = "pause";
  	} else {
  		music.pause();
  		pButton.className = "play";
  	}
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>

        </div>
        {this.props.track.previewURL && !this.props.isRemoval ?
          <div className="Track-preview">
            <audio id={`${this.props.track.previewURL}`} src={`${this.props.track.previewURL}`}></audio>
            <button id={`${this.props.track.id}`} className="play" onClick={this.playAudio}></button>
          </div>
        : !this.props.track.previewURL && !this.props.isRemoval ?
          <p className="noAudio">Preview<br/>unavailable.</p>
        : <span></span>}
        {this.props.isRemoval ? <button className="Track-action" onClick={this.removeTrack}>-</button> : <button className="Track-action" onClick={this.addTrack}>+</button>}
      </div>
    );
  }
}

export default Track;
