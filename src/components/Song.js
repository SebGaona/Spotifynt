import React, { Component } from 'react';
import placeholder from '../img/placeholder.jpg'

class Song extends Component {
  render() {
    const { title, artist, lenght, image } = this.props;

    return (
      <div className='song'>
        <img className='song-img' src= {image || placeholder} alt={title} />
        <h2>{title}</h2>
        <div className='details'>
            <p>Artista: {artist}</p>
            <p>Duración: {lenght}</p>
        </div>
      </div>
    );
  }
}

export default Song;