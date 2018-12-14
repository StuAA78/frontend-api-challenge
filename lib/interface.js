function displayPeeps() {
  fetchPeeps().then(function(result) {
    result.forEach(function(peep) {
      showPeep(new Peep(peep))
    })
  })
}

async function fetchPeeps() {
  let content = await fetch("https://chitter-backend-api.herokuapp.com/peeps")
  return await content.json()
}

function showPeep(peep) {
  document.getElementById("timeline").innerHTML +=`<div class="peep">\
      <span class="peepUser">${peep.getPeepUser().handle}</span> . \
      <span class="peepPostedTime">${moment(peep.getPeepCreated()).fromNow()}</span>\
      <div class="peepBody">${peep.getPeepBody()}</div>\
    </div>`;
}
