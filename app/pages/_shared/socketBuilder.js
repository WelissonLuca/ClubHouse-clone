export default class SocketBuilder{
  constructor({ socketUrl }) {
    this.socketUrl = socketUrl
  }
  build() {
   const socket = globalThis.io.connect(this.socketUrl, {
			withCredentials: false
   });
    
    socket.io('connection', () => console.log())
    socket.io('userConnected', () => console.log())
    socket.io('userDisconnect', () => console.log())

    return socket;
 }
}


