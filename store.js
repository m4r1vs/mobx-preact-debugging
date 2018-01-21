import { observable, action, useStrict } from 'mobx'
useStrict()

class User {
	@observable name = 'Hello'

	constructor(lol) {
		this.name = lol
	}

	@action setUser(user) {
		this.name = user.name
	}
}

class Stores {
	@observable user = new User()
}

export default new Stores('Cool')
