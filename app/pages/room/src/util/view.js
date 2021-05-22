import Attendee from "../entities/attendee.js";
import getTemplate from "../templates/attendeeTemplates.js";

const imgUser = document.getElementById("imgUser");
const roomTopic = document.getElementById("pTopic");
const gridAttendees = document.getElementById("gridAttendees");
const gridSpeakers = document.getElementById("gridSpeakers");
export default class View {
	static updateUserImage({ img, username }) {
		imgUser.src = img;
		imgUser.alt = username;
	}

	static updateRoomTopic({ topic }) {
		roomTopic.innerHTML = topic;
	}
	static addAttendeeOnGrid(item) {
		const attendee = new Attendee(item);
		const htmlTemplate = getTemplate(attendee);
		const baseElement = attendee.isSpeaker ? gridSpeakers : gridAttendees;
		baseElement.innerHTML += htmlTemplate;
	}
}
