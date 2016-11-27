import React from 'react'

class Player extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      editing: false,
    }

    this.handleEditToggle = this.handleEditToggle.bind(this)
  }

  handleEditToggle(){
    const { editing } = this.state
    this.setState({
      editing: !editing
    })
  }

  render(){
    const { player } = this.props
    const { editing } = this.state

    return (
      editing
        ? <li>
            <input defaultValue={player.name} />
            <button onClick={this.handleEditToggle}>Done</button>
          </li>
        : <li className="player" onClick={this.handleEditToggle}>
            {player.name}
          </li>
    )
  }
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
}

Player.defaultProps = {
  name: 'New Player',
}

export default Player
