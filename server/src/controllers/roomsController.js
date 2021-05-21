import { constants } from "../util/constants.js";
import Attende from "../entities/attendee.js"
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
	joinRoom(socket, {user,room}) {
		const userId = user.id = socket.id
		const roomId = room.id

		const updatedUserData = this.#updateGlobalUserData(
			userId,
			user,
			roomId
		)
		console.log(updatedUserData)
		socket.emit(constants.event.USER_CONNECTED, updatedUserData)
	}
	#joinUserRoom(socket, user, room) {
		const roomId = room.id
		const existingRoom = this.rooms.has(roomId);
		const currentRoom = existingRoom ? this.rooms.get(roomId) : {}
		const currentUser = new Attende({
			...user,
			roomId
		})
		
		
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
		return this.#users.get(userId)
	}
	getEvents() {
		const functions = Reflect.ownKeys(RoomsController.prototype)
			.filter(fn => fn != "constructor")
			.map(name => [name, this[name].bind(this)]);

		return new Map(functions);
	}
}
