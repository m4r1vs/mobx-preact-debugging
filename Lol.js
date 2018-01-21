import { h, Component } from 'preact'
import { observer, inject } from 'mobx-preact'

@inject('store') @observer
export default class Lol extends Component {
	componentDidMount = () => console.log('mounted')
	render = ({ store }) => <h1 onClick={store.inc.bind(store)}>Second page: {store.clicks}</h1>
}