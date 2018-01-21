import { h, Component } from 'preact'
import { observer, inject } from 'mobx-preact'

@inject('store') @observer
export default class Login extends Component {
	render = ({ store }) => <h1>You are signed in as {store.name}</h1>
}