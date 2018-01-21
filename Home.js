import { h, Component } from 'preact'
import { observer, inject } from 'mobx-preact'

@inject('store') @observer
export default class Home extends Component {
	render = ({ store }) => <h1 onClick={store.inc.bind(store)}>{store.name}'s Home: {store.clicks}</h1>
}