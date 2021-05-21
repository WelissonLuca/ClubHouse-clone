import { constants } from "../../_shared/constants.js";
import SocketBuilder from "../../_shared/socketBuilder.js";

const socketBuilder = new SocketBuilder({
	socketUrl: constants.socketUrl,
	namespace: constants.socketNamesSpaces.room,
});

const socket = socketBuilder
	.setOnUserConnected(user => console.log("user connected", user))
	.setOnUserDisconnected(user => console.log("user disconnected", user))
	.build();

const room = {
	id: Date.now(),
	topic: "JS Expert éh noix",
};

const user = {
	img: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/pilot_traveller_person_avatar-256.png",
	username: "Welisson Luca",
};

socket.emit(constants.events.JOIN_ROOM, {
	user,
	room,
});
