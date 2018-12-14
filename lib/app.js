$(function () {

    $(window).trigger('hashchange');

    $(window).on('hashchange', function(){
        render(decodeURI(window.location.hash));
    });

    function render(url) {

            var temp = url.split('/')[0];
            $('.main-content .page').removeClass('visible');
            var map = {
                '': function() {
                    fetchPeeps().then(function(peeps) {
                      renderTimeline(peeps)
                    })
                },

                // '#product': function() {
                //
                //     // Get the index of which product we want to show and call the appropriate function.
                //     var index = url.split('#product/')[1].trim();
                //
                //     renderSingleProductPage(index, products);
                // },

                '#sign-up': function() {
                    renderSignUp();
                },

                '#sign-in': function() {
                    renderSignIn();
                },

                '#sign-out': function() {
                    renderSignOut();
                },

                '#post': function() {
                    renderPost();
                },
            };

            // Execute the needed function depending on the url keyword (stored in temp).
            if(map[temp]){
                map[temp]();
            }
            // If the keyword isn't listed in the above - render the error page.
            else {
                renderErrorPage();
            }

        }

    function renderSignUp(){
      var page = $('.sign-up');
      page.addClass('visible');
    }

    function renderSignIn(){
      var page = $('.sign-in');
      page.addClass('visible');
    }

    function renderSignOut(){
      var page = $('.sign-out');
      page.addClass('visible');
    }

    function renderPost(){
      var page = $('.post');
      page.addClass('visible');
    }

    function renderErrorPage(){
        // Shows the error page.
    }

    function createQueryHash(filters){
        // Get the filters object, turn it into a string and write it into the hash.
    }

    function renderTimeline(peeps) {
      var page = $('.timeline');
      peeps.forEach(function(peep) {
        showPeep(new Peep(peep))
      })
      page.addClass('visible');
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

});
