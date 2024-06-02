import React, { Component } from 'react'
import { AiFillDelete } from "react-icons/ai";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} />
        <h2>{this.props.item.name}</h2>
        <b>{this.props.item.cost}$</b>
        <AiFillDelete className='remove-icon' onClick={() => this.props.onRemove(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order