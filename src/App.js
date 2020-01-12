import React, {Component} from 'react';

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: []
    }
  }

  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }

  inputUpdate = (event) => {
    this.setState({input: event.target.value})
  }

  render () {
    console.log('THIS IS STATE.', this.state.isOn)
    return (
      <div className="todo">
        <div className="main">
          <form>
              <input value={this.state.input} onChange={this.inputUpdate}></input>
              <button onClick={this.toggle}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ToDo;
