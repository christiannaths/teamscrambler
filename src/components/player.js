import React from 'react'

class Player extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      editing: false,
    }

    this.handleEditToggle = this.handleEditToggle.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleEditToggle(){
    const { editing } = this.state
    this.setState({
      editing: !editing
    })
  }

  handleDelete() {
    const { player, onDelete } = this.props

    this.setState({
      editing: false
    })

    onDelete(player.id)
  }

  render(){
    const { player, onChange } = this.props
    const { editing } = this.state

    return (
      editing
        ? <li>
            <input defaultValue={player.name} onChange={(event) => onChange(player.id, event.target.value)} />
            <button onClick={this.handleEditToggle}>Done</button>
            <button onClick={this.handleDelete}>⨉</button>
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
