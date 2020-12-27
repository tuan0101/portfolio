import './App.css';
import jsonData from './resumeData.json'
import About from './Components/About';
import Header from './Components/Header';
import Education from './Components/Education';
import React, { Component } from 'react';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Project from './Components/Project';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      // foo: 'bar',
      resumeData: {}
    };

  }

  componentDidMount() {
    this.setState({resumeData: jsonData});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <About data={this.state.resumeData.resume}
               main={this.state.resumeData.main}/>
        <Project data={this.state.resumeData.portfolio}/>
        <Education data={this.state.resumeData.resume}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer />
      </div>
    );
  }
}

export default App;
