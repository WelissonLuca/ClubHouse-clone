import { constants } from "./constants";

export default class SocketBuilder {
	constructor({ socketUrl, namespace }) {
    this.socketUrl = `${socketUrl}/${namespace}`;
    this.onUserConnected = () => {};
    this.onUserDisconnected = () => {};
	}
  setOnUserConnected(fn) {
    this.onUserConnected = fn;

    return this
  }

  setOnUserDisconnected(fn) {
    this.onUserDisconnected = fn;
    
    return this
  }

	build() {
		const socket = globalThis.io.connect(this.socketUrl, {
			withCredentials: false,
		});

		socket.io("connection", () => console.log("conectei"));
		socket.io(constants.events.USER_CONNECTED,this.onUserConnected);
		socket.io(constants.events.USER_DISCONNECTED, this.onUserDisconnected);

		return socket;
	}
}
