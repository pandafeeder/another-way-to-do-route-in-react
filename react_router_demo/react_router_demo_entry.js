import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom'

const Home = () => (<div>HOME PAGE</div>)
const About = () => (<div>ABOUT PAGE</div>)
const Topics = props => (
  <div>
    <Route exact path={props.match.url}  children={props => (
      props.match ? <div>Select a topic:</div>
      : <div>topic</div>
      )}/>
    <ul>
      <li><Link to={`${props.match.url}/react-router`}>react-router</Link></li>
      <li><Link to={`${props.match.url}/universal-router`}>universal-router</Link></li>
    </ul>
    <Route path={`${props.match.url}/:topicID`} component={Topic}/>
  </div>
)

const Topic = props => (
  <div>{props.match.params.topicID}</div>
)


const App = props => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
      </ul>
      <hr/>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/topics' component={Topics}/>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
