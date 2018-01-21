import { h, render, Component } from 'preact'
import { inject, observer, Provider } from'mobx-preact'
import { observable, action, useStrict } from 'mobx'
import { Router } from 'preact-router'
import { Link } from 'preact-router/match'
useStrict(true);

class Store {
	@observable clicks = 0;

	@action inc() {
		this.clicks += 1;
	}
}

@inject('store') @observer
class Home extends Component {
	componentDidMount = () => console.log('mounted')
	render = ({store}) => <h1 onClick={store.inc.bind(store)}>Home: {store.clicks}</h1>
}

@inject('store') @observer
class Lol extends Component {
	componentDidMount = () => console.log('mounted')
	render = ({ store }) => <h1 onClick={store.inc.bind(store)}>Lol: {store.clicks}</h1>
}

const routes = [
	{
		path: '/',
		comp: <Home />
	},
	{
		path: '/lol',
		comp: <Lol />
	}
]

const Clicky = () => (
	<Router>
		{routes.map(route => <div path={route.path}>{route.comp}</div>)}
	</Router>
)

render(
	<Provider store={new Store()}>
		<Clicky />
		<Link href="/lol">LOL</Link>
	</Provider>,
	document.body
)