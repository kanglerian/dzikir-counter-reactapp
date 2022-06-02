import React from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state = {
    counter: 0,
    jumlah: 0,
    total: 0
  }

  ubah = () => {
    this.setState({
      counter: this.state.counter + 1,
      total: this.state.total + 1
    });
    if(this.state.counter === 33){
      this.setState({
        counter: 0,
        jumlah: this.state.jumlah + 1
      });
    }
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{this.state.counter}</h1>
        <p className="Dzikir-result">Total: {this.state.total} | Sunnah: {this.state.jumlah}</p>
        <button className="App-link" onClick={this.ubah}>Hitung</button>
      </header>
    </div>
    );
  }
}

export default App;
