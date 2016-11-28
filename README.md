<img src="https://avatars3.githubusercontent.com/u/2634879?v=3&s=200" width=50/>

# Zero Config React

An ExchangeJS talk by Christian Naths

This repository is meant to demonstrate how simple it can be to get started using React
to build client-side web applications. We start from a clean slate and build out a simple
team randomization web app.


## Prefix: Getting Set Up

#### You'll need:

- nodejs (https://nodejs.org)
- npm (https://www.npmjs.com)
- a web browser

#### You'll find useful:

- a familiarity with ES6 syntax [I made a quick primer](appendix-a-brief-es6-primer.md) if you're looking for somewhere to start
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) (Chrome)
- follow along by cloning this repo locally, and then running the `git checkout` commands found at the beginning of each section

----

|                           Section                            |                            |
|--------------------------------------------------------------|----------------------------|
| [Part 1: Create React App](#part-1-create-react-app)         | `git checkout tags/v0.1.0` |
| [Part 2: Stateless Components](#part-2-stateless-components) | `git checkout tags/v0.2.0` |
| [Part 3: Stateful Components](#part-3-stateful-components)   | `git checkout tags/v0.3.0` |
| [Part 4: Randomize Teams](#part-4-randomize-teams)           | `git checkout tags/v0.4.0` |
| [Part 5: Edit Players](#part-5-edit-players)                 | `git checkout tags/v0.5.0` |
| [Part 6: Create Players](#part-6-create-players)             | `git checkout tags/v0.6.0` |
| [Part 7: Delete Players](#part-7-delete-players)             | `git checkout tags/v0.7.0` |
| [Part 8: Styles](#part-8-styles)                             | `git checkout tags/v1.0.0` |


----

[↑ TOP](#)

## Part 1: Create React App
`git checkout tags/v0.1.0`

#### 1. Install create-react-app from npm

- `npm install -g create-react-app`

#### 2. Create a new React app

- `create-react-app supergroups`
- `cd supergroups`

You'll see a bunch of output, and a new folder will be created in your working directory.
Welcome to your new React app! Take a minute to get familiar with the project's subdirectories
and files.

```
supergroups/
    ├── README.md
    ├── node_modules/
    │   ...
    ├── package.json
    ├── public/
    │   ├── favicon.ico
    │   └── index.html
    └── src/
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        └── logo.svg
```

We'll be putting our React code in the `./src` directory. You can also use the `./public`
directory to hold `normal` imagey, HTMLy, CSSy, and other assety type things. Have you got some
fonts or some sweet gifs you want to use? No problem.

#### 3. Run the development server

- `npm start`

This will start a development server on http://localhost:3000. This is doing a lot behind
the scenes; compiling your ES6 to ES5, webpacking all the things, hot reloading code...



[↑ TOP](#)

## Part 2: Stateless Components
`git checkout tags/v0.2.0`

We'll start out with something really simple. Essentially what we have here is something
along these lines: we've got an app that shows two teams, and each team has some players.

**Or, in the form of a diagram.**
```
+----------------------------------------------+
|                                             |
| App                                         |
|                                             |
| +-------------------+  +------------------+ |
| | Team 1            |  | Team 2           | |
| |                   |  |                  | |
| | +---------------+ |  | +--------------+ | |
| | | Player        | |  | | Player       | | |
| | +---------------+ |  | +--------------+ | |
| |                   |  |                  | |
| | +---------------+ |  | +--------------+ | |
| | | Player        | |  | | Player       | | |
| | +---------------+ |  | +--------------+ | |
| |                   |  |                  | |
| | +---------------+ |  | +--------------+ | |
| | | Player        | |  | | Player       | | |
| | +---------------+ |  | +--------------+ | |
| |                   |  |                  | |
| +-------------------+  +------------------+ |
|                                             |
+----------------------------------------------+
```

Looks like we're going to need three components. Working from the inside outward, that is
`player`, `team`, and `app`. Looks like create-react-app already created the `App.js` component
for us, so lets create a new folder called `components` to hold the other two.

```js
// ./components/player.js
import React from 'react';

const Player = ({player}) => (
  <li className="player">{player.name}</li>
)

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
}

Player.defaultProps = {
  name: 'New Player',
}

export default Player
```

```js
// ./components/team.js
import React from 'react';
import Player from './player'

const Team = ({players, name}) => {

  const playerList = players.map((player, i) => (
    <Player key={i} player={player} />
  ))

  return (
    <div className="team">
      <h1>{name}</h1>
      <ol>{playerList}</ol>
    </div>
  )
}

Team.propTypes = {
  players: React.PropTypes.array.isRequired,
  name: React.PropTypes.string,
}

Team.defaultProps = {
  players: [],
  name: 'The Pylons'
}

export default Team
```

```js
// ./App.js
import React from 'react'
import Team from './components/team'

const samplePlayers = [
  { name: 'Mark' },
  { name: 'Ben' },
  { name: 'Greg' },
  { name: 'Dana' },
  { name: 'Christian' },
  { name: 'Nathan' },
]

const sampleTeams = {
  team1: samplePlayers.slice(0, 3),
  team2: samplePlayers.slice(3),
}

const App = () => (
  <div className="game">
    <Team name='all-stars' players={sampleTeams.team1} />
    <Team name='renegades' players={sampleTeams.team2} />
  </div>
)

export default App;
```

So far so good. But our app isn't very smart. It doesn't even shuffle... 😕


[↑ TOP](#)

## Part 3: Stateful Components
`git checkout tags/v0.3.0`

Here we're going to move our data (the list of players) into our `App` component's `state`, that
way we have some control over it, and it can affect rendering.

```js
// ./App.js
import React from 'react'
import Team from './components/team'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      players: [
        { name: 'Mark' },
        { name: 'Ben' },
        { name: 'Greg' },
        { name: 'Dana' },
        { name: 'Christian' },
        { name: 'Nathan' },
      ]
    }
  }

  render(){
    const { players } = this.state
    const team1 = players.slice(0, 3)
    const team2 = players.slice(3)

    return (
      <div className="app">
        <div className="game">
          <Team name='all-stars' players={team1} />
          <Team name='renegades' players={team2} />
        </div>
        <button>Shuffle!</button>
      </div>
    );
  }
}

export default App;
```

[↑ TOP](#)

## Part 4: Randomize Teams

`git checkout tags/v0.4.0`

Now lets add a simple little shuffle function and apply that to the list of players when
our shuffle button is clicked.


```js
// ./App.js
import React from 'react'
import Team from './components/team'

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a
}

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      players: [
        { name: 'Mark' },
        { name: 'Ben' },
        { name: 'Greg' },
        { name: 'Dana' },
        { name: 'Christian' },
        { name: 'Nathan' },
      ]
    }
  }

  handleShuffle() {
    this.setState({
      players: shuffle(this.state.players)
    })
  }

  render(){
    const { players } = this.state
    const half = Math.ceil(players.length/2)
    const team1 = players.slice(0, half)
    const team2 = players.slice(half)

    return (
      <div className="app">
        <div className="game">
          <Team name='all-stars' players={team1} />
          <Team name='renegades' players={team2} />
        </div>
        <button onClick={this.handleShuffle.bind(this)}>
          Shuffle!
        </button>
      </div>
    );
  }
}

export default App;
```

[↑ TOP](#)

## Part 5: Edit Players

It would be nice if we could edit the player names. First lets rough in the UI for that, and
then we'll wire it up.

### 5a: Rough in Edit UI
`git checkout tags/v0.4.1`



```js
// ./components/player.js
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
```

### 5b: Handle Player Update
`git checkout tags/v0.5.0`

```js
// ./components/player.js
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
    const { player, onChange } = this.props
    const { editing } = this.state

    return (
      editing
        ? <li>
            <input defaultValue={player.name} onChange={(event) => onChange(player.id, event.target.value)} />
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
```

```js
// ./components/team.js
import React from 'react';
import Player from './player'

const Team = ({players, name, onPlayerChange}) => {

  const playerList = players.map((player, i) => (
    <Player key={i} player={player} onChange={onPlayerChange} />
  ))

  return (
    <div className="team">
      <h1>{name}</h1>
      <ol>{playerList}</ol>
    </div>
  )
}

Team.propTypes = {
  players: React.PropTypes.array.isRequired,
  name: React.PropTypes.string,
}

Team.defaultProps = {
  players: [],
  name: 'The Pylons'
}

export default Team
Contact GitHub API Training Shop Blog About
```

```js
// ./App.js
import React from 'react'
import Team from './components/team'

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a
}

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      players: [
        { id: 1, name: 'Mark' },
        { id: 2, name: 'Ben' },
        { id: 3, name: 'Greg' },
        { id: 4, name: 'Dana' },
        { id: 5, name: 'Christian' },
        { id: 6, name: 'Nathan' },
      ]
    }

    this.handleShuffle = this.handleShuffle.bind(this)
    this.handlePlayerChange = this.handlePlayerChange.bind(this)
  }

  handleShuffle() {
    this.setState({
      players: shuffle(this.state.players)
    })
  }

  handlePlayerChange(id, value) {
    const { players } = this.state
    const player = players.find((player) => player.id === id)

    player.name = value

    this.setState({
      players: players
    })
  }

  render(){
    const { players } = this.state
    const half = Math.ceil(players.length/2)
    const team1 = players.slice(0, half)
    const team2 = players.slice(half)

    return (
      <div className="app">
        <div className="game">
          <Team name='all-stars' players={team1} onPlayerChange={this.handlePlayerChange}/>
          <Team name='renegades' players={team2} onPlayerChange={this.handlePlayerChange}/>
        </div>
        <button onClick={this.handleShuffle}>
          Shuffle!
        </button>
      </div>
    );
  }
}

export default App;
```



[↑ TOP](#)

## Part 6: Create Players

`git checkout tags/v0.6.0`

This app wouldn't be very useful if we couldn't add new players. Lets wire that up.

```js
// ./App.js
import React from 'react'
import Team from './components/team'

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a
}

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      players: [
        { id: 1, name: 'Mark' },
        { id: 2, name: 'Ben' },
        { id: 3, name: 'Greg' },
        { id: 4, name: 'Dana' },
        { id: 5, name: 'Christian' },
        { id: 6, name: 'Nathan' },
      ]
    }

    this.handleShuffle = this.handleShuffle.bind(this)
    this.handlePlayerChange = this.handlePlayerChange.bind(this)
    this.handlePlayerAdd = this.handlePlayerAdd.bind(this)
  }

  handleShuffle() {
    this.setState({
      players: shuffle(this.state.players)
    })
  }

  handlePlayerChange(id, value) {
    const { players } = this.state
    const player = players.find((player) => player.id === id)

    player.name = value

    this.setState({
      players: players
    })
  }

  handlePlayerAdd() {
    const { players } = this.state
    const newPlayer = { id: Date.now(), name: 'New Player'}
    players.push(newPlayer)

    this.setState({
      players: players
    })
  }

  render(){
    const { players } = this.state
    const half = Math.ceil(players.length/2)
    const team1 = players.slice(0, half)
    const team2 = players.slice(half)

    return (
      <div className="app">
        <div className="game">
          <Team name='all-stars' players={team1} onPlayerChange={this.handlePlayerChange}/>
          <Team name='renegades' players={team2} onPlayerChange={this.handlePlayerChange}/>
        </div>
        <button onClick={this.handleShuffle}>
          Shuffle!
        </button>
        <button onClick={this.handlePlayerAdd}>
          Add Player
        </button>
      </div>
    );
  }
}

export default App;
```

[↑ TOP](#)

## Part 7: Delete Players

`git checkout tags/v0.7.0`

To round out our feature set, lets add the ability to delete players. This one is trickier
than it sounds at first, because we also want to hide the player edit UI at the same time.
We'll need a new function in the `player` component to handle that part. That function will
then make a call to a function we passed in through props to do the actual deletion in the
`App` component.

```js
// ./components/player.js
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
```

```js
// ./components/team.js
import React from 'react';
import Player from './player'

const Team = ({players, name, onPlayerChange, onPlayerDelete}) => {

  const playerList = players.map((player, i) => (
    <Player
      key={i}
      player={player}
      onChange={onPlayerChange}
      onDelete={onPlayerDelete}
    />
  ))

  return (
    <div className="team">
      <h1>{name}</h1>
      <ol>{playerList}</ol>
    </div>
  )
}

Team.propTypes = {
  players: React.PropTypes.array.isRequired,
  name: React.PropTypes.string,
}

Team.defaultProps = {
  players: [],
  name: 'The Pylons'
}

export default Team
```

```js
// ./App.js
import React from 'react'
import Team from './components/team'

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a
}

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      players: [
        { id: 1, name: 'Mark' },
        { id: 2, name: 'Ben' },
        { id: 3, name: 'Greg' },
        { id: 4, name: 'Dana' },
        { id: 5, name: 'Christian' },
        { id: 6, name: 'Nathan' },
      ]
    }

    this.handleShuffle = this.handleShuffle.bind(this)
    this.handlePlayerChange = this.handlePlayerChange.bind(this)
    this.handlePlayerAdd = this.handlePlayerAdd.bind(this)
    this.handlePlayerDelete = this.handlePlayerDelete.bind(this)
  }

  handleShuffle() {
    this.setState({
      players: shuffle(this.state.players)
    })
  }

  handlePlayerChange(id, value) {
    const { players } = this.state
    const player = players.find((player) => player.id === id)

    player.name = value

    this.setState({
      players: players
    })
  }

  handlePlayerAdd() {
    const { players } = this.state
    const newPlayer = { id: Date.now(), name: 'New Player'}
    players.push(newPlayer)

    this.setState({
      players: players
    })
  }

  handlePlayerDelete(id) {
    let { players } = this.state
    players = players.filter((player) => player.id !== id)
    this.setState({
      players: players
    })
  }

  render(){
    const { players } = this.state
    const half = Math.ceil(players.length/2)
    const team1 = players.slice(0, half)
    const team2 = players.slice(half)

    return (
      <div className="app">
        <div className="game">
          <Team
            name='all-stars'
            players={team1}
            onPlayerChange={this.handlePlayerChange}
            onPlayerDelete={this.handlePlayerDelete}
          />
          <Team
            name='renegades'
            players={team2}
            onPlayerChange={this.handlePlayerChange}
            onPlayerDelete={this.handlePlayerDelete}
          />
        </div>
        <button onClick={this.handleShuffle}>
          Shuffle!
        </button>
        <button onClick={this.handlePlayerAdd}>
          Add Player
        </button>
      </div>
    );
  }
}

export default App;
```

[↑ TOP](#)

## Part 8: Styles


`git checkout tags/v1.0.0`

Last step! Lets give this app a bit of style. React has no strong opinions on how you choose
to do styling. You can `import` stylesheets directly into components, write inline styles
using JavaScript, or with a bit of configuration use a myriad of CSS processing libraries.

