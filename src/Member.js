import React, { Component } from 'react'

class Member extends Component {
  render () {
    const { name, description, imageSuffix } = this.props
    return (
      <div>
      <li><a href={`https://www.hbo.com/game-of-thrones/cast-and-crew/${imageSuffix}`}>Name: {name} </a></li>
      <li>Title: {description}</li>
      </div>
    )
  }
}

export default Member
