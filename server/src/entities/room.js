import Attendee from "./attendee.js"
export default class Room{
  constructor({ id, topic, attendesCount, speakersCount, featuredAttendees, owner, users}) {
    this.id = id;
    this.topic = topic
    this.attendesCount = attendesCount
    this.speakersCount = speakersCount
    this.featuredAttendees = featuredAttendees?.map(attendee => new Attendee(attendee))
    this.owner = new Attendee(owner)
    this.users = users
  }
} 