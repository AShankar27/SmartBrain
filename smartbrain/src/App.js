import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

// const app = new Clarifai.App({
//   apiKey: '9a9bb5a7bd8145e5b9fe420224687da4',
// });

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 400,
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    };
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    // console.log('click');
    this.setState({imageUrl: input})
    fetch("https://kairosapi-karios-v1.p.rapidapi.com/enroll", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-rapidapi-key": "53695891a5mshaf88e0d4b0d57e0p14efcbjsn47d8577f7ef6",
        "x-rapidapi-host": "kairosapi-karios-v1.p.rapidapi.com"
      },
      "body": {
        "image": "http://media.kairos.com/kairos-elizabeth.jpg",
        "gallery_name": "MyGallery",
        "subject_id": "Elizabeth"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
