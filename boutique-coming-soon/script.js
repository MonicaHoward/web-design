function updateTimer(launchDate) {
  var time = launchDate - new Date();
  return {
    'days': Math.floor(time/(1000 * 60 * 60 * 24)),
    'hours': Math.floor((time/(1000 * 60 * 60)) % 24),
    'minutes': Math.floor((time/1000/60) % 60),
    'seconds': Math.floor((time/1000) % 60),
    'total': time
  };
}

function startTimer(id, launchDate) {
  var timerInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(launchDate);

  clock.innerHTML = '<span>' + timer.days +  '<div>days</div>' + '</span>'
                  + '<span>' + timer.hours + '<div>hours</div>' + '</span>'
                  + '<span>' + timer.minutes + '<div>minutes</div>' + '</span>'
                  + '<span>' + timer.seconds + '<div>seconds</div>' + '</span>';

  if (timer.total < 1) {
    clearInterval(timerInterval);
    clock.innerHTML = "WELCOME!";
  };

    }, 1000);
}

window.onload = function() {
  var launchDate = new Date("February 22, 2018 12:00:00");
  startTimer("clock", launchDate);
};
