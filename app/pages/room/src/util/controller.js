import { constants } from "../../../_shared/constants";

export default class RoomController {
	constructor({ roominfo, socketBuilder, view }) {
		this.socketBuilder = socketBuilder;
		this.roominfo = roominfo;
		this.view = view;
		this.socket = {};
	}

	static async initialize(deps) {
		return new RoomController(deps)._initialize();
	}
	async _initialize() {
		this._setupViewEvents();
		this.socket = this._setupSocket();

		this.socket.emit(constants.events.JOIN_ROOM, { user, room });
	}
	_setupViewEvents() {
		this.view.updateUserImage(this.roominfo.user);
		this.view.updateRoomTopic(this.roominfo.room);
	}
	_setupSocket() {
		return this.socketBuilder
			.setOnUserConnected(this.onUserConnected())
			.setOnUserDisconnected(this.onUserDisconnected())
			.setOnRoomUpdated(this.onRoomUpdated())
			.build();
	}

	onRoomUpdated() {
		return room => console.log("room list!", room);
	}

	onUserDisconnected() {
		return user => console.log("user disconnected!", user);
	}

	onUserConnected() {
		return data => {
			const attendee = new Attendee(data);

			console.log("user connected !", attendee);
			this.view.addAttendeeOnGrid(attendee);
		};
	}
}
