import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      param1: 0,
      param2: 0
    };

    this.function1 = this.function1.bind(this);
    this.function2 = this.function2.bind(this);
    this.handleChange = this.handleChange.bind(this);


  }


  handleChange(event) {
    this.setState(
      { param1: event.target.value }
    );
  }






  function1() {
    console.log('Click happened');
  }


  function2() {
    const var1 = 1;
    const var2 = 2;

    alert(var1 + var2)
  }


  render() {

    return (
      <div>
        <button onClick={this.function1}>Click Me</button>



        <br></br>



        <button onClick={this.function2}>Click Me Function 2</button>

      </div>
    )
  }
}


export default App;