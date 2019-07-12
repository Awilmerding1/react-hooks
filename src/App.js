import React from 'react';
import FunctionalApp from './FunctionalApp';


class App extends React.Component {

  state = {count: 0}

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({count: this.state.count+1})}>Click me</button>
        </div>
          {this.state.count}
          <FunctionalApp counting={this.state.count}/>
      </div>
    );
  }

}

export default App;
