import React, { Component } from 'react'

export default class Classbased extends Component {
    constructor() {
        super()
        this.state={
            count:0,
        }
        console.log("constructor called")
    }
    static getDerivedStateFromProps(){
        console.log("GDSFP Called")
    }
    componentDidMount(){
        console.log("CDM called")
    }
    componentDidUpdate(){
        console.log("CDU called")
    }
   
  render() {
    console.log("render called")
    return (
      <div>
        {this.state.count}
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>ClickME</button>
      </div>
    )
  }
}
