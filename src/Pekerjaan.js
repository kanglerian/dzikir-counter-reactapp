import React from "react";

class Pekerjaan extends React.Component {
    state = {
        counter: 0
    }
    ubah = () => {
        this.setState({
            counter: this.state.counter + 1
        });
        if(this.state.counter === 33){
            this.setState({
                counter: 0
            });
            alert(`Sudah 33`);
        }
    }

    render() {
      return(
          <div>
            <h1>{this.state.counter}</h1>
            <button onClick={this.ubah}>Ini button</button>
          </div>
      );
    }
}

export default Pekerjaan;