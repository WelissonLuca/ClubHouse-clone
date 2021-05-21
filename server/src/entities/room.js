export default class Room{
  constructor({ id, topic, attendesCount, speakersCount, featuredAttendees, owner, users}) {
    this.id = id;
    this.topic = topic
    this.attendesCount = attendesCount
    this.speakersCount = speakersCount
      this.featuredAttendees = featuredAttendees
      this.owner = owner
      this.users = users
  }
} 