import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';



const particlesOptions = {
  particles: {
    color: {
      value: "#8C7AAE",
    },    
    links: {
      color: "#FFF0F0",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 600,
      }
    },  
    opacity: {
      value: 0.5,
    },
    shape: {
      polygon: {
        enable: true,
        nb_sides: 6
      },
      type: "circle",
    },
  }    
}

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input })
      fetch('https://radiant-chamber-30692.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
      if (response) {
        fetch('https://radiant-chamber-30692.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {          
          // this.setState({...this.state.user, entries: count})  // doesn't triggers setters, and not working
          //this.setState(Object.assign(this.state.user, { entries: count }))  //object.assign triggers setters
          this.setState({ user: { ...this.state.user, entries: count }})
        })
        .catch(console.log)
      }
        this.displayFaceBox(this.calculateFaceLocation(response));
    })
    .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)

    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({ route: route })
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles' 
        params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <>
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries} />
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onPictureSubmit={this.onPictureSubmit} 
              />
              <FaceRecognition box={box} imageUrl={imageUrl} />
            </>
          : (
              route === 'signin'
              ?  <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> 
              :  <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )           
        }  
      </div>
    );
  }  
}

export default App;
