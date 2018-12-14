function Peep(peep) {
  this.id = peep.id
  this.body = peep.body
  this.created_at = peep.created_at
  this.updated_at = peep.updated_at
  this.user = peep.user
  this.likes = peep.likes
}

Peep.prototype.getPeepId = function() {
  return this.id
}

Peep.prototype.getPeepBody = function() {
  return this.body
}

Peep.prototype.getPeepCreated = function() {
  return this.created_at
}

Peep.prototype.getPeepUpdated = function() {
  return this.updated_at
}

Peep.prototype.getPeepUser = function() {
  return this.user
}

Peep.prototype.getPeepLikes = function() {
  return this.likes
}
