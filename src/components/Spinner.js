import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img className='img-fluid mx-auto d-block'   src={loading} alt=""></img>
      </div>
    )
  }
}
