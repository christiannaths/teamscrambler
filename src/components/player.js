import React from 'react'
import './player.css'

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
        ? <li className="player">
            <input
              className="player-edit-input"
              defaultValue={player.name}
              onChange={(event) => onChange(player.id, event.target.value)}
              autoFocus={true}
            />
            <div className="player-edit-controls">
              <button className="player-edit-done" onClick={this.handleEditToggle}>
                <i className="fa fa-check" aria-hidden="true"></i>
              </button>
              <button className="player-edit-delete" onClick={this.handleDelete}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </button>
            </div>
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
