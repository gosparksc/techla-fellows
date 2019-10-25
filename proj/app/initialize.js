document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  var $ = require('jquery');
  function countdown(endDate) {
    let days, hours, minutes, seconds;

    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) {
    return;
    }

    setInterval(calculate, 1000);

    function calculate() {
      let startDate = new Date();
      startDate = startDate.getTime();

      let timeRemaining = parseInt((endDate - startDate) / 1000);

      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);

        hours = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);

        minutes = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);

        seconds = parseInt(timeRemaining);

        // Populates counter
        document.getElementById("days").innerHTML = `${parseInt(days, 10)} DAYS.`;
      } else {
        return;
      }
    }
  }

  countdown('02/10/2020 11:59:59 PM'); 

  $(document).ready(function() {
      var options = {
          strings: ['engineering', 'design', 'tech', 'new'],
          typeSpeed: 20,
          startDelay: 500,
          smartBackspace: true,
          backDelay: 5000
      }
      var typed = new Typed(".element", options);
  });
});
