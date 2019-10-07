import React, { Component } from 'react';

class Example extends Component{
  constructor(){
    super();
    this.state = {
      val: 0,
    }
  }

  componentDidMount() {
    this.setState({
      val: this.state.val + 1,
    })
    console.log('1', this.state.val);

    this.setState({
      val: this.state.val + 1,
    })
    console.log('2', this.state.val);

    setTimeout(() => {
      this.setState({
        val: this.state.val + 1,
      })
      console.log('3', this.state.val);

      this.setState({
        val: this.state.val + 1,
      })
      console.log('4', this.state.val);
    }, 0)
  }

  render() {
    return null;
  }

}