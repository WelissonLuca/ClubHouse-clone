import { constants } from "../util/constants.js";
export default class RoomsController {
	#users = new Map();
	constructor() {
		this.rooms = new Map();
	 }

	onNewConnection(socket) {
		const { id } = socket;

		console.log("connection stablished with ", id);
		this.#updateGlobalUserData(id)
	}
	joinRoom(socket, {user, ...room}) {
		const userId = user.id = socket.id
		const roomId = room.id

		const updatedUserData = this.#updateGlobalUserData(
			userId,
			user,
			roomId
		)
		socket.emit(constants.event.USER_CONNECTED, data)
	}
	#updateGlobalUserData(userId, userData = {}, roomId = '') {
		const user = this.#users.get(userId) ?? {}
		const existingRoom = this.rooms.has(roomId)

		const updatedUserData = new Attende({
			...user,
			...userData,
			roomId,
			isSpeaker: !existingRoom,

		})
		this.#users.set(userId, updatedUserData)

	}
	getEvents() {
		const functions = Reflect.ownKeys(RoomsController.prototype)
			.filter(fn => fn != "constructor")
			.map(name => [name, this[name].bind(this)]);

		return new Map(functions);
	}
}
