const imgUser = document.getElementById("imgUser");
const roomTopic = document.getElementById("pTopic");
export default class View{
  static updateUserImage({ img, username }) {
    imgUser.src = img;
    imgUser.alt = username
  }

  static updateRoomTopic({topic}) {
    roomTopic.innerHTML = topic
  }
}