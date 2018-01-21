import { h, render, Component } from 'preact'
import { inject, observer, Provider } from'mobx-preact'
import { observable, action, useStrict } from 'mobx'
import { Router } from 'preact-router'
import { Link } from 'preact-router/match'
import Wrapper from './wrapper'
import Async from './async'
useStrict(true);

class Store {
	@observable clicks = 0;
	@observable role = 'GUEST'
	@observable name = 'Guest'

	@action inc() {
		this.clicks += 1;
	}

	@action init(user) {
		this.role = 'LOGGEDIN'
		this.name = user.name
		console.log('Router should have re-rendered now!')
	}
}

const routes = [
	{
		path: '/',
		roles: ['LOGGEDIN'],
		comp: () => import(/* webpackChunkName: "home-view" */ './Home.js').then(module => module.default)
	},
	{
		path: '/lol',
		roles: ['LOGGEDIN'],
		comp: () => import(/* webpackChunkName: "lol-view" */ './Lol.js').then(module => module.default)
	}
]


@inject('store') @observer
class Clicky extends Component {

	componentDidMount = () => {
		fetch('https://jsonplaceholder.typicode.com/users/5')
			.then(res => res.json())
			.then(res => {
				this.props.store.init(res)
			})
			.catch(err => console.error(err))
	}

	importLoginPage = () => import(/* webpackChunkName: "login-view" */ './Login.js').then(module => module.default)

	render = ({store}) => (
		<Router>
			{routes.map(route => route.roles.includes(store.role)
				? <Wrapper path={route.path} key={route.path}><Async loadFunction={route.comp} /></Wrapper>
				: <Wrapper path={route.path} key={route.path}><Async loadFunction={this.importLoginPage} /></Wrapper>)}
		</Router>
	)
}

render(
	<Provider store={new Store()}>
		<Clicky />
		<Link href="/">HOME</Link><br />
		<Link href="/lol">LOL</Link>
	</Provider>,
	document.body
)