import React from 'react'

export default class ButtonA extends React.Component{


  render() {
    return (
      <button {...this.props}>
        Button From Application A {this.props.children}
      </button>
    )
  }

}