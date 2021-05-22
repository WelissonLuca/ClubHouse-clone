import Attendee from "../entities/attendee.js";
const speakerIcon = ' <img src="./../../assets/avatars/erick.jpeg" ';

export default function getTemplate(attendee = new Attendee()) {
  const speakerTemplate = attendee.isSpeaker ? speakerIcon : "";
  
	return `
    <div id="${attendee.id}" class="room-card__user">
        <div class="room-card__user__img">
        <img src="${attendee.img}" alt="${attendee.username}">
        </div>
        <p class="room-card__user__name">
        ${speakerTemplate}
        ${attendee.firstName}
        </p>
    </div>
    `;
}
