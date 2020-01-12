import React, {Component} from 'react';

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: []
    }
  }

  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    console.log("THIS IS STATE", this.state.items)
    this.setState({
      items : [...this.state.items, this.state.input],
      input: ''
    })
  }

  render () {
    return (
      <div className="todo">
        <div className="main">
          <form onSubmit={this.formSubmit}>
              <input placeholder="Enter Task" value={this.state.input} onChange={this.inputUpdate}></input>
              <button>Submit</button>
          </form>
            <ul>
              {this.state.items.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
        </div>
      </div>
    )
  }
}

export default ToDo;
