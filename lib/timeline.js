function Timeline(peepsArray) {
  this.peeps = peepsArray.map(peep => new Peep(peep))  
}

Timeline.prototype.getPeep = function(peep) {
  return this.peeps[peep]
}
