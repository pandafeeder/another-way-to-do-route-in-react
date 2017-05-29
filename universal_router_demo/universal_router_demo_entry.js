import UniversalRouter from 'universal-router';
import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';

const history = createHistory()

const route = [
  {
    path: '/',
    action: () => (<div><LinkList/><hr/><Home/></div>)
  },
  {
    path: '/about',
    action: () => (<div><LinkList/><hr/><About /></div>)
  },
  {
    path: '/topics',
    children:[
      {
        path:'/',
        action: context => (<div><LinkList/><hr/><Topics params={context.parmas}/></div>)
      },
      {
        path:'/:topicID',
        action: context => (<Topic params={context.params} />)
      }
    ]
  }
];

const LinkList = () => (
  <div>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/topics'>Topics</Link></li>
    </ul>
  </div>
)
const Home = () => (<div>HOME PAGE</div>)
const About = () => (<div>ABOUT PAGE</div>)
const Topics = props => (
  <div>
    {props.params ? <div>topic:</div> :<div>Select a topic:</div>}
    <li><Link to='/topics/react-router'>topci1</Link></li>
    <li><Link to='/topics/universal-router'>topci2</Link></li>
  </div>
);
const Topic = props => (
  <div>{props.params.topicID}</div>
)


const router = new UniversalRouter(route);

function render(location) {
  router.resolve({path:location.pathname}).then( component => {
      ReactDOM.render(component, document.getElementById('app'))
  });
}

render(history.location)
history.listen(render)

class Link extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(e) {
    e.preventDefault()
    history.push(this.props.to)
  }
  render() {
    return <a href={this.props.to} onClick={this.clickHandler}>{this.props.children}</a>
  }
}
