import React, { Component } from 'react'
import Member from './Member.js'

class House extends Component {
  render () {
    const { name, people } = this.props
    return (
      <div>
        <h4><a href="https://www.hbo.com/game-of-thrones/cast-and-crew/">Name: {name} </a></h4>
        <ul>Members: {people.map(member => (
          <Member
            key={member.name}
            name={member.name}
            description={member.description}
            imageSuffix={member.imageSuffix}
          />
        ))}</ul>
      </div>
    )
  }
}

export default House
