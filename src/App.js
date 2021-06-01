import logo from './logo.svg';
import './App.css';
import Movies from './Movies.js'
import React from 'react'
class App extends React.Component{
  state = {
    showMovies: true
  }

  onClick = () => {
    this.setState({
      showMovies: !this.state.showMovies
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={this.onClick}> React Lifecycle Methods</h2>
        </header>    
          {this.state.showMovies ? <Movies prop2="nick" name="nick" test="hello world"/> : null }

      </div>
    ); 
  }
}

export default App;
