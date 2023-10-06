import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state={
            error:null,
            errorInfo:null,
        }
    }
    componentDidCatch(error,info){
        this.setState({
            error:error,
            errorInfo:info,
        })
    }
  render() {
    if(this.state.errorInfo){
        return (
            <div>
              <h1>Error Agaya. </h1>
              <h1>{this.state.error && this.state.error.toString()}</h1>
            </div>
          )
    }
    return this.props.children;
  }
}
